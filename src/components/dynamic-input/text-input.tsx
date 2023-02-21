import React,{useEffect} from "react";
import { Controller } from "react-hook-form";
import { FieldProps } from "models/components";
import Text from "components/text";
import { CustomInput } from "./custom-input";
import { AdormentInput } from "./input-adorment
import { InputLabel, Box } from '@mui/material';
import { white } from 'styles/palette';

export const FormInputText: React.FC<FieldProps> = ({
  name = "",
  control,
  label = "",
  defaultValue = "",
  multiline = false,
  type,
  labelAlignment = 'left',
  color = white[200],
  borderColor = undefined,
  margin,
  placeholder = "",
  required,
  variant,
  register,
  error,
  adorments,
  errorTxField,
  ...rest
}) => {
  const [inputType, setType] = React.useState<any>("text");

  useEffect(()=>{
    setType(type)
  },[type])
  const handleTypeSwitch = (switchedType: string) => {
    setType(switchedType);
  };
  return (
    <Box 
      sx={{
        mt: 2, 
        // height:"7rem",
        width:"100%",
        position: "relative"
      }}
    >
     {label && (
      <InputLabel 
        sx={{color: white[200], textAlign:labelAlignment, fontFamily: "'Open sans', sans-serif"}}
      >
        {label}
      </InputLabel>
     )}
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            onChange={onChange}
            value={value}
            label={label}
            id={name}
            type={inputType}
            autoComplete="new-password"
            color={color}
            margin={margin}
            placeholder={placeholder}
            required={required}
            variant={variant}
            error={error[name]?.message ? true : false}
            min="0"
            multiline={multiline}
            // width={"100%"}
            {...register(name, { required })}
            {...rest}
            endAdornment={
              adorments ? (
                <AdormentInput handleTypeSwitch={handleTypeSwitch} />
              ) : null
            }
          />
        )}
      />
      <Text
        text={error && error[name]?.message}
        textOptions={ errorTxField ? { field: errorTxField.toLowerCase() } : {}}
        align="left"
        color="error"
      />
    </Box>
  );
};
