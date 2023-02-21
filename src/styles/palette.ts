import { keyframes } from '@mui/system';

export const background  = {
  black: 'linear-gradient(180deg, #212133 0%, #000000 100%)',
  purple: '#020118'
}

export const gradient = {
  light: 'linear-gradient(90deg, #6631E7 0%, #FF6E91 197.37%)',
  dark: 'linear-gradient(90deg, rgba(151, 71, 255, 0.75) 0%, #181627 100%)',
  blueToPurple: 'linear-gradient(89.36deg, #3DA4C5 0.57%, #8769F5 96.07%)',
  purpleToBlack: 'linear-gradient(180deg, rgba(102, 49, 231, 0.69) 0%, rgba(13, 4, 50, 0) 135.31%)',
  blueToBlack: 'linear-gradient(180deg, rgba(48, 87, 187, 0.65) 0%, rgba(13, 4, 50, 0) 131.82%)'
}

export const green = {
  50: '#17E050'
}

export const red = {
  50: '#C40039'
}

export const blue = {
  50: '#565B84',
  100: "#7FD9F6",
  200: '#110438'
};

export const white = {
  50: '#FFFFFF',
  100: '#F2EEFF',
  200: '#E8E5FA',
}

export const grey = {
  0: '#A9A9A9',
  50: '#BBB8C5',
  100: '#A5A5A8',
  200: '#818392',
  300: '#4C4D4D',
  400: '#5B5D6D',
  500: '#3B3B4D',
  600: '#2E303F',
  700: '#292A38',
  800: '#101018',
  900: '#020203',
  1000: '#010101'
}

export const purple = {
  50: '#C0BFCE',
  100: '#CFC7F5',
  200: '#B3A5F0',
  300: '#927AEB',
  400: '#1F1D2C',
  500: '#181627',
  600: '#6631E7'
}

export const flexBox = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:"center"
};

export const rowFlexBox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems:'center'
}

export const colorTransition = keyframes`
  to {
    background-position: 200% center;
  }
`;
