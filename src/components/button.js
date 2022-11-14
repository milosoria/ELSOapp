import fontSizes from '../utils/font-sizes'
import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { Text, TouchableHighlight, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// TODO: create button atom to and refactor every button used through the app
const Button = ({
    navigation,
    screen,
    text,
    containerStyles = {},
    textStyles = {},
    buttonStyles = {},
}) => {
    const styles = create({
        shadowWrap: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            shadowOpacity: 0.2,
            shadowOffset: { width: 4, height: 4 },
        },
        button: {
            borderRadius: 40,
        },
        buttonText: {
            color: colors.primary.white,
            fontSize: fontSizes.body,
            fontFamily: 'SFPro-Medium',
        },
    })
    return (
        <View
            style={[
                { alignItems: 'center', justifyContent: 'center' },
                containerStyles,
            ]}
        >
            <TouchableHighlight
                underlayColor="#FFFFFF"
                activeOpacity={0.8}
                style={styles.shadowWrap}
                onPress={() => navigation.navigate(screen)}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.button, buttonStyles]}
                    colors={[
                        colors.primary.blue,
                        colors.secondary.blueGradient,
                    ]}
                >
                    <Text style={[styles.buttonText, textStyles]}>{text}</Text>
                </LinearGradient>
            </TouchableHighlight>
        </View>
    )
}

export default Button
