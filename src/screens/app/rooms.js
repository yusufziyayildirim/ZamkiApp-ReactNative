import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RoomsScreen = () => {

  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", paddingTop: 10 }}>
        <Text>
          Rooms Page
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default RoomsScreen