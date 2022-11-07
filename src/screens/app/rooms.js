import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../theme/colors'

const RoomsScreen = () => {

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", paddingTop: 10 , height:"100%", backgroundColor: colors.backgroundColor}}>
        <Text>
          Rooms Page
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default RoomsScreen