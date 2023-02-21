import { useEffect, useState } from "react";
import Config from "common/config";
import { useAppSelector, useAppDispatch } from "redux/store";
import { TimerPayload, Timer } from "models";
import {
  addTimer,
  removeTimer,
  incrementTimerClick,
  showTimerCountDown,
  resetTimerClicks,
  setTimerMinutes,
  setTimerSeconds,
} from "redux/slices/common";

const useCoolDownTimers = (timer?: Timer | null, numberOfClicks?: number) => {
  const dispatch = useAppDispatch();
  const { timers } = useAppSelector((state) => state.common);

  const maxClicks = numberOfClicks || Config.MAX_CONSECUTIVE_CLICKS;
  const [resumeTimer, setResumeTimer] = useState<TimerPayload | null>(null);
  const currentTimer = timers.find((obj: TimerPayload) => obj.id === timer?.id) || null;

  useEffect(() => {
    if (timer && currentTimer === null) {
      dispatch(
        addTimer({
          id: timer.id,
          minutes: timer.minutes,
          seconds: timer.seconds,
        })
      );
    } else if (currentTimer) {
      setResumeTimer({ ...currentTimer });
    }
  }, [currentTimer, timer]);

  useEffect(() => {
    let temptimer: ReturnType<typeof setTimeout>;
    if (currentTimer) {
      if (currentTimer.timesClicked >= maxClicks) {
        dispatch(showTimerCountDown(currentTimer.id));
      } else if (timer) {
        temptimer = setTimeout(
          //pass down the timer too
          () =>
            dispatch(
              resetTimerClicks({
                id: currentTimer.id,
                minutes: timer.minutes,
                seconds: timer.seconds,
              })
            ),
          5000
        );
      }
    }
    return () => {
      clearTimeout(temptimer);
    };
  }, [currentTimer]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (currentTimer && currentTimer.displayCountDown && resumeTimer) {
      interval = setInterval(() => {
        if (resumeTimer.seconds > 0) {
          setResumeTimer({ ...resumeTimer, seconds: resumeTimer.seconds - 1 });
        }

        if (resumeTimer.seconds === 0) {
          if (resumeTimer.minutes === 0) {
            clearInterval(interval);
            dispatch(removeTimer(currentTimer.id));
          } else {
            setResumeTimer({
              id: resumeTimer.id,
              displayCountDown: resumeTimer.displayCountDown,
              timesClicked: resumeTimer.timesClicked,
              minutes: resumeTimer.minutes - 1,
              seconds: 59,
            });
          }
        }
      }, 1000);
    }

    return () => {
      if (currentTimer && currentTimer.displayCountDown && resumeTimer) {
        dispatch(
          setTimerMinutes({
            id: currentTimer.id,
            minutes: resumeTimer?.minutes || 0,
          })
        );

        dispatch(
          setTimerSeconds({
            id: currentTimer.id,
            seconds: resumeTimer?.seconds || 0,
          })
        );
      }

      clearInterval(interval);
    };
  }, [currentTimer, dispatch, resumeTimer]);

  const incrementTimerCounter = () => {
    dispatch(incrementTimerClick(currentTimer.id));
  };

  return {
    resumeTimer,
    incrementTimerCounter,
  };
};

export default useCoolDownTimers;
