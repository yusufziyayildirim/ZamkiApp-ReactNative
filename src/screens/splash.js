import { View, Text, SafeAreaView } from 'react-native'
import colors from '../theme/colors'

const SplashScreen = () => {

    return (
        <SafeAreaView>
            <View style={{ height:"100%", alignItems: "center", justifyContent:"center", paddingTop: 10 }}>
                <Text style={{color:colors.red, fontSize:24, fontWeight:"800"}}>
                    ZamkiApp
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen