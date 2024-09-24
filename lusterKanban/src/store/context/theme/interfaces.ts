export const THEME_ID = {
  EndlessSpring: "EndlessSpring",
  Nebula: "Nebula",
} as const;

export type ThemeIdTypes = keyof typeof THEME_ID;

export interface ITheme {
  id: ThemeIdTypes
  // isDark: boolean
  // toggleDarkMode: () => void
  color:IColor
  typography: TextType
}
export type ThemeGlobalsType = {
  text: TextType;
  spacing?: SpacingType;
  "shadow-border"?: ShadowBorderType;
  image?: ImageType;
};

//----------------------- Color -----------------------//
export interface IColor {
  light: ColorTypes
  dark: ColorTypes
}
export type ColorTypes = {
  palleteVariants: PalleteVariantTypes;
  text: string;
  background: string;
  accent: string;
};
export type PalleteType = {
  [key in ThemeIdTypes]: PalleteVariantTypes;
};
export type PalleteVariantTypes = {
  primary: ShadeTypes;
  secondary?: ShadeTypes;
  tertiary?: ShadeTypes;
};

export type ShadeTypes = {
  "700": string;
  "600": string;
  "500": string;
  "400": string;
  "300": string;
  "200": string;
  "100": string;
};

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
