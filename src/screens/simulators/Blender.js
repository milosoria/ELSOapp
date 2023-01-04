import { useContext, useState } from 'react'
import {
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
    View,
} from 'react-native'
import { InstructionsModal, Meter, Mixer } from '../../components/'
import DimensionContext from '../../contexts/dimensionContext'
import { useToken } from 'native-base'

const Blender = () => {
    const [gray100] = useToken('colors', ['primary.gray.100'])
    const [modalVisible, setModalVisible] = useState(false)
    const { maxDimension } = useContext(DimensionContext)
    const handlePress = () => {
        setModalVisible(!modalVisible)
    }

    const styles = StyleSheet.create({
        root: {
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
        },
        centered: {
            alignSelf: 'center',
        },
        column: {
            flexDirection: 'column',
            backgroundColor: gray100,
        },
        button: {
            borderRadius: 20,
            position: 'absolute',
            bottom: 10,
            left: 10,
        },
    })
    return (
        <>
            <SafeAreaView style={styles.column}>
                <View style={styles.centered}>
                    <View style={styles.root}>
                        <Meter type="ml-min" />
                        <Meter type="LPM" />
                        <Mixer />
                    </View>
                </View>
                <TouchableHighlight
                    underlayColor={gray100}
                    activeOpacity={0.8}
                    style={[styles.button, { borderRadius: 100 }]}
                    onPress={handlePress}
                >
                    <Image
                        source={require('../../assets/help/help_button.png')}
                        resizeMode="contain"
                        style={{
                            width: maxDimension * 0.08,
                            height: maxDimension * 0.08,
                            borderRadius: 100,
                        }}
                    />
                </TouchableHighlight>
            </SafeAreaView>
            <InstructionsModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    )
}

export default Blender
