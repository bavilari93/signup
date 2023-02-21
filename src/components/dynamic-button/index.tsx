import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ButtonProps } from 'models/components';
import { flexBox } from 'styles/palette';
import { useTranslation } from "react-i18next";
import useCoolDownTimers from 'common/hooks/use-cool-down-timers';
import CountDown from 'components/count-down';

const DynamicButton : React.FC<ButtonProps> = ({ 
  variant, 
  foreColor, 
  containerWidth = 'inherit',
  spacing, 
  spacingY, 
  spacingX,
  marginTop, 
  alignment, 
  buttonAlignment = 'center',
  onPress, 
  text, 
  sx = {}, 
  disabled = false,
  withCoolDown = false,
  timer,
  numberOfClicks,
}) => {
  const { t } = useTranslation();
  const {resumeTimer , incrementTimerCounter} = useCoolDownTimers(timer,numberOfClicks);
  const { displayCountDown, minutes, seconds } = resumeTimer || {};

  return (
  <Box
      textAlign={alignment}
      p={spacing}
      py={spacingY}
      px={spacingX}
      sx={{...flexBox, alignItems: buttonAlignment, width: containerWidth}}
      mt={marginTop}
    >
      <Button
        onClick={
          withCoolDown ? () => {
            if(displayCountDown) {
              return;
            }
            incrementTimerCounter();
            onPress();
          } 
          : () => onPress()
        }
        variant={variant}
        color={foreColor}
        sx={{...sx, fontWeight:'bold'}}
        disabled={
          disabled ? true : withCoolDown ? displayCountDown : false
        }
      >
        {
          withCoolDown ? 
            displayCountDown ?
            <CountDown 
              minutes={minutes ? minutes : 0}
              seconds={seconds ? seconds : 0}
            /> : t(text)
          : t(text)
        }
      </Button>
    </Box>
  );
}

export default DynamicButton;
