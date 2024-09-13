import { PalleteType } from "./interfaces";

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

export const Pallete: PalleteType = {
  EndlessSpring: {
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
  },

  Nebula: {
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
  },
};
//-------------------------- Container Classes -------------------------- //
export const Container = {
  flex: {
    column: {
      plain: {
        display: "flex",
      },
      contentBetween: { display: "flex", justifyContent: "space-between" },
    },
    row: { display: "flex", flexDirection: "row" },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  },
};
//-------------------------- Theme -------------------------- //
export const Theme = {
  Nebula: {
    dark: {
      pallette: Pallete.Nebula,
      background: Pallete.Nebula.primary?.[700],
      text: {
        color: Pallete.Nebula.secondary?.[100],
      },
    },
  },
};
