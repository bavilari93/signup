import * as React from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';


const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = styled(ButtonUnstyled)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
`;

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

export const AdormentInput = ({handleTypeSwitch}:any) =>{

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {

    const inputType = !values.showPassword ? 'text' : 'password';
    handleTypeSwitch(inputType)
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <InputAdornment>
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
      >
        {values.showPassword ? <></> : <></> }
      </IconButton>
    </InputAdornment>
  );
}