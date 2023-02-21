import { SxProps } from '@mui/system';

export interface StyleFunctionSx {
  (props: object): object;
  filterProps?: string[];
}

export type TypographyProps = {
    text?: string;
    children?: JSX.Element | JSX.Element[];
    textOptions?: {};
    align?: 'center'| 'inherit'| 'justify'| 'left'| 'right';
    paragraph?: boolean;
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    sx?: SxProps;
    noWrap?: boolean;
    onClick?:any;
    fontWeight?: 'light' | 'regular' | 'medium' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600;
  }

  export type RadioGroupModel = {
    label: string,
    labelIcon?: any;
    value: string | number,
    optionDescription? : string
  }
  export type FieldProps = {
    name: string,
    control: any,
    label?: string,
    multiline?: boolean;
    labelColor?: string,
    options?: Array<RadioGroupModel>,
    setValue?: any,
    defaultChecked?:boolean,
    type?:string,
    open?:boolean;
    color?:'primary'| 'secondary'| 'error'| 'info'| 'success'| 'warning',
    margin?:'dense'| 'none'| 'normal',
    placeholder?:string,
    required?:boolean,
    variant?:'filled'| 'outlined'| 'standard',
    register?:any,
    adorments?:boolean,
    defaultValue?: string | number | any;
    error?: any;
    fullWidth?: boolean;
    sx?: SxProps;
    errorTxField?: string
    min?:number;
    max?:number;
    marks?:any;
    style?:any;
    handleOpen?:boolean;
    revertInputStyle?:any;
    labelAlignment?:'left'|'right'|'center'|undefined;
    borderColor?: string | undefined;
    minRows?: number;
    maxRows?: number;
    labelFirst?: boolean;
    noneOption?: boolean;
  }