import { ITheme, PalleteType } from "../context/theme/interfaces";

//-------------------------- Typography -------------------------- //
export const Roboto = {
  family: { fontFamily: "Roboto" },
  weight: {
    "100": { fontWeight: 100 },
    "300": { fontWeight: 300 },
    "400": { fontWeight: 400 },
    "500": { fontWeight: 500 },
    "900": { fontWeight: 900 },
  },
  style: {
    normal: { fontStyle: "normal" },
    italic: { fontStyle: "italic" },
  },
};

//-------------------------- Pallete -------------------------- //

export const GrayScale = {
  "700": "#000000",
  "600": "#434343",
  "500": "#656565",
  "400": "#898989",
  "300": "#AFAFAF",
  "200": "#D6D6D6",
  "100": "#FFFFFF",
};

const EndlessSpringColors = {
  primary: {
    "700": "#081C00",
    "600": "#1A3E00",
    "500": "#2D6200",
    "400": "#428A00",
    "300": "#58B300",
    "200": "#6FDE00",
    "100": "#BCFFA2",
  },
  secondary: {
    "700": "#242400",
    "600": "#434343",
    "500": "#666700",
    "400": "#8a8C00",
    "300": "#B1B300",
    "200": "#D9DC00",
    "100": "#F7F900",
  },
};

const NebulaColors = {
  primary: {
    "700": "#1F005D",
    "600": "#4100AC",
    "500": "#650DFF",
    "400": "#8461FF",
    "300": "#A794FF",
    "200": "#CBC2FF",
    "100": "#F1EFFF",
  },
  secondary: {
    "700": "#23002E",
    "600": "#4F0065",
    "500": "#8200A4",
    "400": "#B900E7",
    "300": "#D361FF",
    "200": "#E0A3FF",
    "100": "#F1DAFF",
  },
  tertiary: {
    "700": "#000F2F",
    "600": "#002864",
    "500": "#0046A4",
    "400": "#0067E8",
    "300": "#618DFF",
    "200": "#A1B6FF",
    "100": "#D8DFFF",
  },
};

//-------------------------- Container Classes -------------------------- //
export const Container = {
  flex: {
    column: {
      plain: {
        display: "flex",
      },
      "space-between": { display: "flex", justifyContent: "space-between" },
    },
    row: { display: "flex", flexDirection: "row" },
  },
  grid: {
    "md-lg": {
      "6": {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
      },
      "12": {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
      },
    },
    "xs-sm": {
      "3": {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      "1": {
        display: "grid",
      },
    },
  },
};
//-------------------------- Theme -------------------------- //
export const EndlessSpring:ITheme = {  
  id:"EndlessSpring"  ,
   
  typography: {
      fontFamily: Roboto.family.fontFamily,
      fontSize: {
        "12":  "12px" ,
        "14":  "14px" ,
        "16":  "16px" ,
        "21":  "21px" ,
        "32":  "32px" ,
        "55":  "55px" ,
        "64":  "64px" ,
        "72":  "72px" ,
        "94":  "94px" ,
      },
      fontWeight: {
        "100":  100 ,
        "300":  300 ,
        "400":  400 ,
        "500":  500 ,
        "900":  900 ,
      },
    },
  
  color: { 

    dark: {

      background: EndlessSpringColors.primary[700],
      text: EndlessSpringColors.primary[100],
      accent: EndlessSpringColors.secondary[100],
      palleteVariants: EndlessSpringColors,
    },
    light: {
      background: EndlessSpringColors.primary[100],
      text: EndlessSpringColors.secondary[200],
      accent: EndlessSpringColors.secondary[100],
      palleteVariants: EndlessSpringColors,
    },
  },
};

