import React from "react";
import { TypographyProps } from "models/components";
import { Typography } from "@mui/material";
import { white } from 'styles/palette';

const Text : React.FC<TypographyProps> = ({
  text,
  children,
  textOptions = {},
  align = 'inherit',
  paragraph = false,
  variant = 'subtitle2',
  color = white[200],
  noWrap = false,
  fontWeight = "regular",
  onClick = () => {},
  sx = {}
}) => {
  return (
    <Typography
      align={align}
      paragraph={paragraph}
      variant={variant}
      color={color}
      noWrap={noWrap}
      onClick={onClick}
      fontWeight={fontWeight}
      sx={{whiteSpace: 'pre-wrap', fontFamily: "'Inter', sans-serif", fontSize: "1rem", ...sx}}
    >
      {children ? children : text}
    </Typography>
  );
};

export default Text;