import { Image, ImageBackground  } from 'react-native'
import Knob from '../knob'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../assets/pdb/left-lock-pannel'
const LeftPannel = () => {

    const { dimension } = useContext(DimensionContext)
    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const knobPath = require(`${ROOTPATH}/big-knob.png`)
    const axisPath = require(`${ROOTPATH}/axis.png`)

    const degRange = [0,72]
    const knobSize = dimension*(0.16)

    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : dimension*0.485,
            width : dimension*0.18,
            marginRight : dimension*0.01
        },
        knob : {
            top : dimension*0.20
        },
        axis : {
            resizeMode : 'stretch',
            top : dimension*0.065,
            width : dimension*0.11,
            height : dimension*0.11
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={knobPath} degRange={degRange} size={knobSize} style={styles.knob}/>
            <Image source={axisPath} style={styles.axis}/>
        </ImageBackground>
    )
}

export default LeftPannel
