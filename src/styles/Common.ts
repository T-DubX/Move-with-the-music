import {theme} from "./theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || 'Rubik'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.fontPrimary};
    line-height: ${lineHeight || 1.2};
    font-size: clamp(${Fmin}px, calc( (100vw - 360px)/(1275 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`