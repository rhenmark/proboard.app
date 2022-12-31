
type TextWeightProps = Array<number | string>
type WeightStyleProps = Record<string | number, Record<string | number, string | number>>

const textWeight: TextWeightProps = [100, 200, 300, 400, 500, 600, 700, 800, 800, "normal", "bold"]
export const generateTextWeights = () => {
    let weights: WeightStyleProps = {}

    textWeight.forEach(item => {
        weights[`text${item}`] = {
            fontWeight: `${item}`
        }
    })

    return weights
}

const fontSizes: TextWeightProps = [12, 14, 16, 20, 24, 28, 32]
export const generateFontSizes = () => {
    let fontSize: WeightStyleProps = {}

    fontSizes.forEach((item) => {
        fontSize[`text${item}`] = {
            fontSize: item
        }
    })

    return fontSize
}