import { ITheme, Shade, ShadeTypes, ThemeIdTypes } from "../context/theme/interfaces";

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

export const GrayScale: ShadeTypes = {
  id: "GrayScale",
  "700": "#000000",
  "600": "#434343",
  "500": "#656565",
  "400": "#898989",
  "300": "#AFAFAF",
  "200": "#D6D6D6",
  "100": "#FFFFFF",
};

const EndlessSpringPallete: ShadeTypes = {
  id: "EndlessSpring",
  "700": "#081C00",
  "600": "#1A3E00",
  "500": "#2D6200",
  "400": "#428A00",
  "300": "#58B300",
  "200": "#6FDE00",
  "100": "#BCFFA2",
};
const ChainsawPallete: ShadeTypes = {
  id: "Chainsaw",
  "700": "#242400",
  "600": "#434343",
  "500": "#666700",
  "400": "#8a8C00",
  "300": "#B1B300",
  "200": "#D9DC00",
  "100": "#F7F900",
};
const NebulaPallete: ShadeTypes = {
  id: "Nebula",
  "700": "#1F005D",
  "600": "#4100AC",
  "500": "#650DFF",
  "400": "#8461FF",
  "300": "#A794FF",
  "200": "#CBC2FF",
  "100": "#F1EFFF",
};
const IceCreamPallete: ShadeTypes = {
  id: "Icecream",
  "700": "#23002E",
  "600": "#4F0065",
  "500": "#8200A4",
  "400": "#B900E7",
  "300": "#D361FF",
  "200": "#E0A3FF",
  "100": "#F1DAFF",
};

const SkyPallete: ShadeTypes = {
  id: "Sky",
  "700": "#000F2F",
  "600": "#002864",
  "500": "#0046A4",
  "400": "#0067E8",
  "300": "#618DFF",
  "200": "#A1B6FF",
  "100": "#D8DFFF",
};

// Curried getShade function
export const getShade = (id: ThemeIdTypes) => (shade: Shade): string => {
  const palette = Palletes.find(pallete => pallete.id === id);
  if (!palette) throw new Error(`Palette ${id} not found.`);
  const color = palette[shade];
  if (!color) throw new Error(`Shade ${shade} not found in palette ${id}.`);
  return color;
};


const getEndlessSpringPallete = getShade("EndlessSpring")
const getChainsawPallete = getShade("Chainsaw")
const getGrayScalePallete = getShade("GrayScale")
const getIcecreamPallete = getShade("Icecream")
const getNebulaPallete = getShade("Nebula")
const getSkyPallete = getShade("Sky")




const Palletes: ShadeTypes[] = [EndlessSpringPallete, NebulaPallete, ChainsawPallete, IceCreamPallete, SkyPallete];

//-------------------------- Theme -------------------------- //
export const isDarkMode = () => {
  const isDark = localStorage.getItem("isDark");
  return isDark === "0" ? true : isDark === "1" ? false : undefined;
};


export const EndlessSpring: ITheme = {
  id: "EndlessSpring",

  typography: {
    fontFamily: Roboto.family.fontFamily,
    fontSize: {
      "12": "12px",
      "14": "14px",
      "16": "16px",
      "21": "21px",
      "32": "32px",
      "55": "55px",
      "64": "64px",
      "72": "72px",
      "94": "94px",
    },
    fontWeight: {
      "100": 100,
      "300": 300,
      "400": 400,
      "500": 500,
      "900": 900,
    },
     color: getEndlessSpringPallete(isDarkMode() ? Shade.LightSurface : Shade.Dark),
    
  },

  
    background: getEndlessSpringPallete(isDarkMode() ? Shade.Dark : Shade.LightSurface),
  
    
    pallete: getEndlessSpringPallete
  }
  


const Themes: ITheme[] = [EndlessSpring];
