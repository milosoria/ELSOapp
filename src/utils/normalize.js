import { Dimensions, PixelRatio, StyleSheet } from 'react-native'

const ratio = PixelRatio.get()

export const normalize = (size) => {
    const { width, height } = Dimensions.get('window')
    if (ratio >= 2 && ratio < 3) {
        if (width < 360) {
            return size * 0.95
        } else if (height < 667) {
            return size
        } else if (height >= 667 && height <= 735) {
            return size * 1.15
        }

        return size * 1.25
    } else if (ratio >= 3 && ratio < 3.5) {
        if (width < 360) {
            return size
        } else if (height < 667) {
            return size * 1.15
        } else if (height >= 667 && height <= 735) {
            return size * 1.2
        }

        return size * 1.27
    } else if (ratio >= 3.5) {
        if (width < 360) {
            return size
        } else if (height < 667) {
            return size * 1.2
        } else if (height >= 667 && height <= 735) {
            return size * 1.25
        }

        return size * 1.4
    }

    return size
}

export const create = (
    styles,
    targetProperties = [
        'fontSize',
        'margin',
        'marginLeft',
        'marginRight',
        'marginHorizontal',
        'marginVertical',
        'padding',
        'paddingLeft',
        'paddingRight',
        'paddingVertical',
        'paddingHorizontal',
        'height',
        'width',
        'borderRadius',
        'shadowRadius',
        'top',
        'bottom',
        'left',
        'right',
    ]
) => {
    const normalizedStyles = {}
    Object.keys(styles).forEach((key) => {
        normalizedStyles[key] = {}
        Object.keys(styles[key]).forEach((property) => {
            if (targetProperties.includes(property)) {
                if (
                    typeof styles[key][property] == 'string' &&
                    styles[key][property].includes('%')
                ) {
                    normalizedStyles[key][property] = styles[key][property]
                } else {
                    normalizedStyles[key][property] = normalize(
                        styles[key][property]
                    )
                }
            } else {
                normalizedStyles[key][property] = styles[key][property]
            }
        })
    })

    return StyleSheet.create(normalizedStyles)
}

export default normalize
