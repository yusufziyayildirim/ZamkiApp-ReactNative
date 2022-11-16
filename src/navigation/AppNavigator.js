import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Tab Screens and Stack
import HomeScreen from '../screens/app/home';
import ChatsScreen from '../screens/app/chats';
import RoomsScreen from '../screens/app/rooms';
import ProfileNavigator from './stacks/ProfileNavigator';
//Stack Screens
import UserDetailScreen from '../screens/app/home/userDetail';
import ChatScreen from '../screens/app/chat';
import ChangePasswordScreen from '../screens/app/profile/changePassword';
import TabBar from '../containers/TabBar';

import colors from '../theme/colors';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const AppStack = createNativeStackNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Chats" component={ChatsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Rooms" component={RoomsScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

function AppNavigator() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Tab"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="UserDetail"
                component={UserDetailScreen}
                options={{ headerShown: false }}
            />
            <AppStack.Screen
                name="Chat"
                component={ChatScreen}
                options={({ navigation, route }) => ({
                    title: "",
                    headerStyle: {
                        backgroundColor: colors.backgroundColor
                    },
                    headerLeft: () => (
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity
                                style={{ padding: 5 }}
                                onPress={
                                    () => navigation.goBack()
                                }
                            >
                                <FontAwesome name="chevron-left" size={20} color={colors.textPrimary} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}
                                onPress={() => navigation.navigate('UserDetail', { user: route.params.user })}
                            >
                                <Image
                                    style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: 100
                                    }}
                                    source={{ uri: "https://seamcline.com.ng/students/assets/images/users/1.jpg" }}
                                />
                                <Text style={{ fontSize: 17, paddingLeft: 9, fontWeight: "600" }}>{route.params.user.name}</Text>
                                <View style={{ width: 14, height: 14, backgroundColor: "green", borderRadius: 50, marginLeft: 5 }} />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <>
                            <TouchableOpacity
                                style={{ padding: 10, paddingHorizontal: 15 }}
                            // onPress={
                            //   () => navigation.goBack()
                            // }
                            >
                                <FontAwesome name="video-camera" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ padding: 10 }}
                            // onPress={
                            //   // () => navigation.goBack()
                            // }
                            >
                                <FontAwesome name="phone" size={24} color="black" />
                            </TouchableOpacity>
                        </>
                    )
                })}
            />
            <AppStack.Screen
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
        </AppStack.Navigator>
    );
}

export default AppNavigator