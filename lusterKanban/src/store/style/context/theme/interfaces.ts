import { ActionTypes } from "../../reducer/interfaces"

export const THEME_ID ={
    EndlessSpring: "EndlessSpring"
} as const

export type PalleteType = {
    "700": string 
    "600": string
    "500": string
    "400": string
    "300": string
    "200": string
    "100": string
    
} 

export type ThemeIdsType = keyof typeof THEME_ID

export type ThemeColorType ={
    
    background: string
    onSurface: string
    onSecondarySurface: string
    onError: string
    onAccent: string
    disabled: string
    text: string
    pallete: PalleteType

}
export interface ITheme {
    id:ThemeIdsType
    isDark:boolean
    dispatch:(payload:any, type: ActionTypes) => void
    color: ThemeColorType
    
}