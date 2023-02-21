import { MODAL } from "common/constants/modal";
import { ModalPayload } from "models/redux";



export const staticMapModal: ModalPayload = {
  messageTitle: MODAL.STATIC_MAP.EXPERIENCE_TITLE,
  message:MODAL.STATIC_MAP.EXPERIENCE_MESSAGE,
  displayContinueButton: true
}