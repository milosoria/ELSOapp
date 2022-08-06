import { ImageBackground  } from 'react-native'
import Knob from '../knob'
import { create } from '../../utils/normalize'
import DimensionContext from '../../contexts/dimensionContext'
import { useContext } from 'react'

const ROOTPATH = '../../assets/blender/Mixer'
const Mixer = () => {

    const { dimension } = useContext(DimensionContext)
    // Images' Paths
    const backgroundPath = require(`${ROOTPATH}/background.png`)
    const knobPath = require(`${ROOTPATH}/knob.png`)

    const degRange = [0,248]
    const knobSize = dimension*(0.25)

    const styles = create({
        backgroundImage : {
            resizeMode : 'stretch',
        },
        background : {
            alignItems : 'center',
            shadowRadius : 5,
            shadowOpacity : 0.3,
            height : dimension*0.6,
            width : dimension*0.24,
            marginTop : dimension*0.25,
            marginLeft : dimension*0.005
        },
        knob : {
            top : dimension* 0.21
        }
    })

    return (
        <ImageBackground source={backgroundPath} style={styles.background} imageStyle={styles.backgroundImage}>
            <Knob imagePath={knobPath}  degRange={degRange} size={knobSize} style={styles.knob}/>
        </ImageBackground>
    )
}

export default Mixer
