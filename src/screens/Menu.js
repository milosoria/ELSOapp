import { create } from '../utils/normalize'
import colors from '../utils/color-palette'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useContext } from 'react'
import DimensionContext from '../contexts/dimensionContext'
import fontSizes from '../utils/font-sizes'
import { ScrollView } from 'react-native-gesture-handler'

const Menu = ({ navigation }) => {
    const { maxDimension } = useContext(DimensionContext)

    const styles = create({
        container : {
            backgroundColor : colors.primary.darkBackground,
            alignItems : 'center',
            flex : 1,
        },
        card : {
            backgroundColor : colors.primary.gray,
            height : maxDimension * 0.25,
            width : maxDimension * 0.55,
            marginVertical : maxDimension * 0.015,
            borderRadius : 10,
            flexDirection : 'row',
            alignItems : 'center'
        },
        cardsContainer : {
            marginTop : maxDimension * 0.015
        },
        title : {
            alignItems : 'flex-start',
            width : maxDimension * 0.26,
            marginLeft : maxDimension * 0.04,
            marginBottom : maxDimension * 0.035
        },
        titleText : {
            fontWeight : '600',
            color : colors.primary.white,
            fontSize : fontSizes.body
        },
        subTitleText : {
            fontWeight : '400',
            color : colors.primary.white,
            fontSize : fontSizes.small,
            marginTop : maxDimension * 0.01
        },
        buttonContainer : {
            alignSelf : 'center',
            marginLeft : maxDimension * 0.09
        },
        button : {
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : 40,
            paddingVertical : 8,
            borderRadius : 100,
            shadowRadius : 2,
            shadowOpacity : 0.5,
            shadowOffset : { width: 2, height: 2 },
        },
        buttonText : {
            color : colors.primary.white,
            fontSize : fontSizes.medium,
            fontWeight : '600'
        },
        companyCard : {
            backgroundColor : colors.primary.gray,
            height : maxDimension * 0.25,
            width : maxDimension * 0.55,
            marginVertical : 15,
            borderRadius : 10,
            flexDirection : 'column',
        },
        companyInfoTitle : {
            alignItems : 'flex-start',
            width : maxDimension * 0.25,
            marginLeft : maxDimension * 0.04,
            marginTop : maxDimension * 0.03
        },
        companyInfoButton : {
            alignItems : 'center',
            backgroundColor : colors.primary.blue,
            paddingHorizontal : 45,
            paddingVertical : 8,
            borderRadius : 100,
            shadowRadius : 2,
            shadowOpacity : 0.5,
            shadowOffset : { width: 2, height: 2 },
        },
        companyInfoButtonContainer : {
            flexDirection : 'row',
            justifyContent : 'center',
            marginTop : maxDimension * 0.065,
        },
    })

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

                <View style={styles.cardsContainer}>
                    <View style={styles.companyCard}>
                        <View style={styles.companyInfoTitle}>
                            <Text style={styles.titleText}>
                                Welcome to ELSO educational tools app!
                            </Text>
                        </View>
                        <View style={styles.companyInfoButtonContainer}>
                            <TouchableOpacity style={styles.companyInfoButton} onPress={() => console.log('Pressed')}>
                                <Text style={styles.buttonText}>Learn about ELSO</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                                ECMO Machines Simulators
                            </Text>
                            <Text style={styles.subTitleText}>
                                Air-Oxygen Blender - Pressure Display Box
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SimulatorsCarousel')}>
                                <Text style={styles.buttonText}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>
                                Clinical Tools
                            </Text>
                            <Text style={styles.subTitleText}>
                                Suggestive Canula
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ToolsCarousel')}>
                                <Text style={styles.buttonText}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Menu
