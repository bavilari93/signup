import { createTheme } from '@mui/material/styles';

// TYPES for adding new colors for theming
declare module '@mui/material/styles' {
  interface PaletteColor {
    50?:string;
    100?:string;
    200?:string;
    300?:string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
  }
  interface SimplePaletteColorOptions {
    50?:string;
    100?:string;
    200?:string;
    300?:string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
  }
  interface Palette {
    white?: Palette['primary'];
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    backColor?: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    backColor?: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    gradient?: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    gradient?: PaletteOptions['primary'];
  }
}

export const appTheme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          color: '#E8E5FA'
        },
        icon: {
          color: '#E8E5FA'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          textTransform: 'none',
          fontSize: "1rem",
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              background: 'linear-gradient(90deg, #6631E7 0%, #FF6E91 197.37%)',
              color: '#F2EEFF',
              "&:disabled": {
                color: '#818392',
                backgroundColor: '#292A38',
                background: '#292A38'
              } 
            }),
          ...(ownerState.variant === 'outlined' &&
          ownerState.color === 'primary' && {
            color: '#F2EEFF',
            position: 'relative',
            borderRadius: "5px",
            "&:disabled": {
              color: '#2E303F',
              bgcolor: 'none',
              background: 'none',
              borderColor: '#2E303F'
            },
            '&:before': {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "4px",
              padding: "1px",
              borderImage :"linear-gradient(90deg, #6631E7 0%, #FF6E91 197.37%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              MaskComposite: "exclude"
            }
          })
        }),
      },
    },
  },
  palette: {
    primary: { //AKA Purple
      50: '#C0BFCE',
      100: '#CFC7F5',
      200: '#B3A5F0',
      main: '#927AEB',
      400: '#1F1D2C',
      500: '#181627'
    },
    secondary: { //AKA Grey
      50: '#BBB8C5',
      100: '#A5A5A8',
      200: '#818392',
      300: '#4C4D4D',
      main: '#5B5D6D',
      500: '#3B3B4D',
      600: '#2E303F',
      700: '#292A38',
      800: '#101018'
    },
    info: {
      main: '#7FD9F6'
    },
    success: {
      main: '#17E050'
    },
    error: {
      main: '#C40039'
    },
    backColor: {
      dark: 'linear-gradient(180deg, #212133 0%, #000000 100%)',
      main: '#020118'
    },
    white: {
      light: '#FFFFFF',
      main: '#F2EEFF',
      dark: '#E8E5FA'
    },
    gradient: {
      light: 'linear-gradient(90deg, #6631E7 0%, #FF6E91 197.37%)',
      main: 'linear-gradient(90deg, rgba(151, 71, 255, 0.75) 0%, #181627 100%)'
    }
  },
});

export default appTheme;