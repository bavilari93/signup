import * as yup from "yup";
//Validation related
import { PASSWORD_REGEX, EMAIL_REGEX } from "common/helper/regex";
import { Translate } from "common/translations";
import { ONLY_LETTERS } from "common/helper/regex/index";

export const schema = yup.object({}).shape({
  password: yup
    .string()
    .when("confirm_password", {
      is: (value: string) => value.length > 0,
      then: yup
        .string()
        .oneOf([yup.ref("confirm_password")], Translate.TX_PASSWORD_MATCH_RULE),
    })
    .matches(PASSWORD_REGEX, Translate.TX_PASSWORD_CRITERIA_RULE)
    .min(16, Translate.TX_PASSWORD_CRITERIA_RULE)
    .required(Translate.TX_REQUIRED),
  confirm_password: yup
    .string()
    .matches(PASSWORD_REGEX, Translate.TX_PASSWORD_CRITERIA_RULE)
    .min(16, Translate.TX_PASSWORD_CRITERIA_RULE)
    .oneOf([yup.ref("password")], Translate.TX_PASSPHRASE_MATCH_RULE)
    .required(Translate.TX_REQUIRED),
  email: yup
    .string()
    .email(Translate.TX_EMAIL_FORMAT)
    .matches(EMAIL_REGEX, Translate.TX_EMAIL_FORMAT)
    .required(Translate.TX_REQUIRED),
  unique_password: yup.bool().oneOf([true], Translate.TX_ACCEPT_TERMS),
  accept_terms: yup.bool().oneOf([true], Translate.TX_ACCEPT_TERMS),
  first_name: yup
    .string()
    .trim()
    .matches(ONLY_LETTERS, Translate.TX_INVALID)
    .min(2, Translate.TX_INVALID)
    .max(15, Translate.TX_INVALID)
    .required(Translate.TX_REQUIRED),
  last_name: yup
    .string()
    .trim()
    .matches(ONLY_LETTERS, Translate.TX_INVALID)
    .min(2, Translate.TX_INVALID)
    .max(15, Translate.TX_INVALID)
    .required(Translate.TX_REQUIRED),
});
