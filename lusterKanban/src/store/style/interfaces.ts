
export const PALLETE = {
    EndlessSpring: "EndlessSpring",
    Nebula: "Nebula"
} as const

export type PalleteNames = keyof typeof PALLETE
export type PalleteType = {
    [key in PalleteNames] : PalleteVariantTypes
}
export type PalleteVariantTypes = {
    primary: ShadeTypes
    secondary?:ShadeTypes
    tertiary?: ShadeTypes
}

export type ShadeTypes = {
   
        "700": string
        "600": string
        "500": string
        "400": string
        "300": string
        "200": string
        "100": string
   
}