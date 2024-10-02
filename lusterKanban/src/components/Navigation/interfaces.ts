import { MessurmentsType } from "../interfaces"

export type NavigationBarType = {
container: MessurmentsType
iconSize: string
indicator: MessurmentsType
largeBadge: BadgeType
smallBadge: BadgeType
topPadding: string
bottomPadding: string
paddingBetween: string
}

type BadgeType = {
    size: string
    shape: string
}

export type DestinationsType =  NavigationType[]
export type NavigationType = {
    icon: string
    path: string
    label: string
}