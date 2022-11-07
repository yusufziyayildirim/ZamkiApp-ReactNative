import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import DismissKeyboard from '../../components/DismissKeyboard'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import UserListItem from '../../components/UserListItem';
import SearchBox from '../../components/SearchBox';

const HomeScreen = () => {

  return (
    <View style={{ backgroundColor: "#eff3f5", paddingTop: 10 }}>
      <FocusAwareStatusBar barStyle="dark-content" />
      <DismissKeyboard>
        <SafeAreaView>
          <Text style={{ fontSize: 25, fontWeight: "800", textAlign: "center" }}>Community</Text>
          <View style={{ width: "100%", height: .4, backgroundColor: "#A9A9A9", marginTop: 5 }} />
          <ScrollView s>
            <SearchBox />
            <View>
              <UserListItem
                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                userName="Yusuf Yıldırım"
                userDetail="I want to practice basic spanis and make some friends"
                speaks=""
                learns=""
              />
              <UserListItem
                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                userName="Yusuf Yıldırım"
                userDetail="I want to practice basic spanis and make some friends"
                speaks=""
                learns=""
              />
              <UserListItem
                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                userName="Yusuf Yıldırım"
                userDetail="I want to practice basic spanis and make some friends"
                speaks=""
                learns=""
              />
              <UserListItem
                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                userName="Yusuf Yıldırım"
                userDetail="I want to practice basic spanis and make some friends"
                speaks=""
                learns=""
              />
              <UserListItem
                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                userName="Yusuf Yıldırım"
                userDetail="I want to practice basic spanis and make some friends"
                speaks=""
                learns=""
              />
              <UserListItem
                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                userName="Yusuf Yıldırım"
                userDetail="I want to practice basic spanis and make some friends"
                speaks=""
                learns=""
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </DismissKeyboard>
    </View>
  )
}

export default HomeScreen