import React, { useState, useEffect } from "react";
//Form related dependencies
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Divider, Grid } from "@mui/material";
//Form model and validations
import { schema } from "./signup-validation";
import { NewUserFormModel } from "models/forms";
//Components
import { FormInputText } from "components/dynamic-input/text-input";
import DynamicButton from "components/dynamic-button";
import Text from "components/text";
import useAuth from "common/hooks/use-auth0";


const SignUpForm = () => {
  const { createUser } = useAuth();


  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    unique_password: false,
    accept_terms: false,
  };

  const {
    watch,
    clearErrors,
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
  } = useForm<NewUserFormModel>({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const canSubmit = (isValid);

  const currentPassword = watch("password");
  const confirmPassword = watch("confirm_password");

  useEffect(() => {    
    if(currentPassword === confirmPassword) {
      clearErrors("confirm_password");
      clearErrors("password");
    }
  }, [currentPassword, confirmPassword]);


  const onSubmit = (data: NewUserFormModel) => {
    //verify if captcha is valid
      const { password, email, first_name, last_name } = data;
      const signUpData = {
        email,
        first_name,
        last_name,
      };
      createUser({ password, signUpData });
    }

  const sx = { display: "flex", flexDirection: "column", width: "100%" };

  return (
    <Box sx={sx}>
      <Text 
        align="left" 
        text="Create New Account"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 700,
          fontSize: '24px'
        }}
      />
      {/* <Box display="flex" flexDirection={{xs: "column", md: "row"}}> */}
      <Grid
        container
        spacing={{ xs: 0, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 8 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <FormInputText
            control={control}
            register={register}
            name="first_name"
            type="text"
            color={errors.first_name ? "error" : "primary"}
            margin="dense"
            placeholder={TX_FIRSTNAME}
            required={true}
            variant="standard"
            error={errors}
            errorTxField={TX_FIRSTNAME}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <FormInputText
            control={control}
            register={register}
            name="last_name"
            type="text"
            color={errors.last_name ? "error" : "primary"}
            margin="dense"
            placeholder={TX_LASTNAME}
            required={true}
            variant="standard"
            error={errors}
            errorTxField={TX_LASTNAME}
          />
        </Grid>
      </Grid>
      {/* </Box> */}
      <FormInputText
        control={control}
        register={register}
        name="email"
        type="email"
        color={errors.email ? "error" : "primary"}
        margin="dense"
        placeholder={TX_EMAIL}
        required={true}
        variant="standard"
        error={errors}
        errorTxField={TX_EMAIL}
      />

      <FormInputText
        control={control}
        register={register}
        name="password"
        type="password"
        color={errors.password ? "error" : "primary"}
        margin="dense"
        placeholder={TX_PASSWORD}
        required={true}
        variant="standard"
        error={errors}
        adorments={true}
        errorTxField={TX_PASSWORD}
      />
      <FormInputText
        control={control}
        register={register}
        name="confirm_password"
        type="password"
        color={errors.confirm_password ? "error" : "primary"}
        margin="dense"
        placeholder={TX_CONFIRM_PASSWORD}
        required={true}
        variant="standard"
        error={errors}
        adorments={true}
        errorTxField={TX_CONFIRM_PASSWORD}
      />
      <br></br>
      <Divider variant="middle" flexItem sx={signUpFormStyle.divider} />
      <DynamicButton
        variant="outlined"
        onPress={handleSubmit(onSubmit)}
        text={TX_CONTINUE}
        sx={{ my: 2, display: "block" }}
        disabled={!canSubmit}
        withCoolDown={true}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 3 }}
      >
      </Box>
    </Box>
  );
};

export default SignUpForm;

const signUpFormStyle = {
  divider: {
    borderBottomWidth: "3px",
    marginTop: "10px",
    marginBottom: "10px",
  },
};
