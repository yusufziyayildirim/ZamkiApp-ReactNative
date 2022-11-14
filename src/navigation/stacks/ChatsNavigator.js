import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatsScreen from '../../screens/app/chats';
import ChatScreen from '../../screens/app/chat';
import UserDetailScreen from '../../screens/app/home/userDetail';


const ChatsStack = createNativeStackNavigator();

const ChatsNavigator = () => {
    return (
        <ChatsStack.Navigator initialRouteName="Chats">
            <ChatsStack.Screen
                name="Chats"
                component={ChatsScreen}
                options={{ headerShown: false }}
            />
            <ChatsStack.Screen
                name="Chat"
                component={ChatScreen}
                // options={{ headerShown: false }}
            />
            <ChatsStack.Screen
                name="UserDetail"
                component={UserDetailScreen}
                // options={{ headerShown: false }}
            />
        </ChatsStack.Navigator>
    )
}

export default ChatsNavigator