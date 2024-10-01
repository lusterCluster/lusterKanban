export const THEME_ID = {
  EndlessSpring: "EndlessSpring",
  Nebula: "Nebula",
  GrayScale: "GrayScale",
  Chainsaw: "Chainsaw",
  Icecream: "Icecream",
  Sky: "Sky",
} as const;

export type ThemeIdTypes = keyof typeof THEME_ID;

export interface ITheme {
  id: ThemeIdTypes
  // isDark: boolean
  // toggleDarkMode: () => void
  background: string
  pallete: (shade: Shade) => string
  typography: TextType
}
export type ThemeGlobalsType = {
  text: TextType;
  spacing?: SpacingType;
  "shadow-border"?: ShadowBorderType;
  image?: ImageType;
};

//----------------------- Color -----------------------//
const SHADES = ["700", "600", "500", "400", "300", "200", "100"] as const;

export interface IModes {
  getColor?:(isDark: boolean) => ColorTypes  
}
export type ColorTypes = {  
  text: string;
  background: string;
  accent: string;
};

export type ShadeTypes = {
  id: ThemeIdTypes;
  "700": string;
  "600": string;
  "500": string;
  "400": string;
  "300": string;
  "200": string;
  "100": string;
};

export enum Shade {
  Dark = "700",
  SecondaryDark = "600",
  Surface = "500",
  SecondarySurface = "400",
  Focus = "300",
  Hover = "200",
  LightSurface = "100",
}

//----------------------- Typography -----------------------//


export interface ITypography {
  text: TextType;
}
export type TextType = {
  fontFamily: string
  fontSize: { 
    "12":  "12px"  
    "14":  "14px"  
    "16":  "16px"  
    "21":  "21px" 
    "32":  "32px" 
    "55":  "55px" 
    "64":  "64px" 
    "72":  "72px" 
    "94":  "94px" 
};
  fontWeight: {
    "100":  100 
    "300":  300 
    "400":  400 
    "500":  500 
    "900":  900 
  };
  color: string
  lineHeight?: string
};
//----------------------- Spacing -----------------------//
export interface ISpacing {
  spacing: SpacingType;
}

export type SpacingType = {
  spacingUnit?: string;
  padding?: string;
  margin?: string;
};

//----------------------- Shadow & Border -----------------------//

export interface IShadowBorder {
  "shadow-border": ShadowBorderType;
}
type ShadowBorderType = {
  borderRadius?: string;
  boxShadow?: string;
};
//----------------------- Image -----------------------//
export interface IImage {
  image: ImageType;
}

export type ImageType = {
  imageRadius?: string;
  width?: string;
  height?: string;
};
