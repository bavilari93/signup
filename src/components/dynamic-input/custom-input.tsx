import * as React from 'react';
import InputUnstyled, {
    InputUnstyledProps,
    inputUnstyledClasses,
  } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { grey , purple, white, red, gradient } from 'styles/palette';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const StyledInputRoot = styled('div')(
  ({ theme }) => `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: double 1px transparent;
    background-image: linear-gradient(${grey[700]}, ${grey[700]});
    background-origin: border-box;
    background-clip: padding-box, border-box;

    &.${inputUnstyledClasses.focused} {
      border-color: transparent !important;
      background-image: linear-gradient(${grey[700]}, ${grey[700]}), ${gradient.light} !important;
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }

    &.${inputUnstyledClasses.error} {
      border-color: ${red[50]} !important;
    }

    &:hover {
      border-color: ${grey[200]};
    }
  `
);

const StyledInputElement = styled('input')(
  ({ theme }) => `
  line-height: 1.5;
  flex-grow: 1;
  color: ${white[50]};
  background: ${grey[700]};
  border: none;
  padding: 12px 12px;
  outline: 0;
  width: -webkit-fill-available;
  font-family: 'Open sans', sans-serif;
  font-size: 16px;
  border-radius: 8px;

  &:focus {
    color: ${purple[300]};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${purple[300]};
      word-wrap: break-word;
    }
    :-ms-input-placeholder {
      color: ${purple[300]};
      word-wrap: break-word;
    }
  }

  &:hover {
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${grey[200]};
      word-wrap: break-word;
    }
    :-ms-input-placeholder {
      color: ${grey[200]};
      word-wrap: break-word;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }
`,
);


const StyledTextareaElement = styled(TextareaAutosize)(
  ({ theme }) => `
  line-height: 1.5;
  flex-grow: 1;
  color: ${white[50]};
  background: ${grey[700]};
  border: none;
  padding: 12px 12px;
  outline: 0;
  width: -webkit-fill-available;
  font-family: 'Open sans', sans-serif;
  font-size: 16px;
  border-radius: 8px;

  &:focus {
    color: ${purple[300]};

    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${purple[300]};
      word-wrap: break-word;
    }
    :-ms-input-placeholder {
      color: ${purple[300]};
      word-wrap: break-word;
    }
  }

  &:hover {
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${grey[200]};
      word-wrap: break-word;
    }
    :-ms-input-placeholder {
      color: ${grey[200]};
      word-wrap: break-word;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: 'color 9999s ease-out, background-color 9999s ease-out';
    -webkit-transition-delay: 9999s;
  }
`,
);

export const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  const { components, ...other } = props;
  const [min, max ] = [Object(other)["min"], Object(other)["max"]];
  return (
    <InputUnstyled
      components={{
        Root: StyledInputRoot,
        Input: StyledInputElement,
        Textarea: StyledTextareaElement,
        ...components,
      }}
      {...other}
      ref={ref}
      autoComplete="new-password"
      componentsProps={{input: {max, min}}}
    />
  );
});
