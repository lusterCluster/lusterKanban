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
