import { StyleSheet } from "react-native"
import { generateTextWeights, generateFontSizes } from "./text"

// TODO
const position = ["absolute", "relative"]

type xStyleType = Record<string, Record<string, string | number>>
export const xStyle: xStyleType = StyleSheet.create({
    ...generateTextWeights(),
    ...generateFontSizes(),
    posAbsolute: {
        position: "absolute"
    },
    posRelative: {
        position: "relative"
    }
})