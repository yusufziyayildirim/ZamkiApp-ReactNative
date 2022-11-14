import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import DismissKeyboard from '../../components/DismissKeyboard'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import UserListItem from '../../components/UserListItem';
import SearchBox from '../../components/SearchBox';
import colors from '../../theme/colors';
import { useEffect } from 'react';
import { useState } from 'react';
import routes from '../../constants/routes';
import { useSelector } from 'react-redux';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const { userToken } = useSelector(state => state.auth);

  const [loading, setLoading] = useState([])
  const [users, setUsers] = useState([])
  const getAllUser = async () => {
    try {
      setLoading(true)
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
      const response = await axios.get(
        routes.GET_ALL_USER,
        config
      )
      setLoading(false)
      setUsers(response.data.data)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getAllUser()
  }, [])



  return (
    <View style={{ backgroundColor: colors.backgroundColor, paddingTop: 10 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <DismissKeyboard>
        <SafeAreaView>
          <Text style={{ fontSize: 25, fontWeight: "800", textAlign: "center" }}>Community</Text>
          <View style={{ width: "100%", height: .5, backgroundColor: colors.borderColor, marginTop: 5 }} />
          <ScrollView>
            <SearchBox />
            <View>
              {users &&
                users.map((user, i) => {
                  return (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate('UserDetail', { user: user })}>
                      <UserListItem
                        userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                        userName={user.name}
                        userDetail={user.desc}
                        speaks=""
                        learns=""
                      />
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </ScrollView>
        </SafeAreaView>
      </DismissKeyboard>
    </View>
  )
}

export default HomeScreen