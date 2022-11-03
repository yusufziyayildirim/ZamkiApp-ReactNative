import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from "react-redux";
import { logout } from '../../store/auth/authActions';

const HomeScreen = () => {

  const dispatch = useDispatch()

  const handleLogout = async () => {
    dispatch(logout())
  }
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", paddingTop: 10 }}>
        <Text>
          Home Page
        </Text>
        <TouchableOpacity onPress={handleLogout} style={{ marginTop: 300, width: 100, height: 60, backgroundColor: "blue", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
          <Text style={{ color: "white" }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen