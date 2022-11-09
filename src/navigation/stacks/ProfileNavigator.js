import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "../../screens/app/profile"
import ChangePasswordScreen from "../../screens/app/profile/changePassword"
import colors from '../../theme/colors';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ProfileStack = createNativeStackNavigator();


const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={({ navigation }) => ({
          title: "Change Password",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.backgroundColor
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 5 }}
              onPress={
                () => navigation.goBack()
              }
            >
              <FontAwesome name="chevron-left" size={20} color={colors.textPrimary} />
            </TouchableOpacity>
          )
        })}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator