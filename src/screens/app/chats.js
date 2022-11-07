import { View, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DismissKeyboard from '../../components/DismissKeyboard'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import ChatListItem from '../../components/ChatListItem';
import SearchBox from '../../components/SearchBox';
import colors from '../../theme/colors';

const ChatsScreen = () => {

    return (
        <View style={{ backgroundColor: colors.backgroundColor, paddingTop: 10 }}>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <SafeAreaView>
                    <Text style={{ fontSize: 25, fontWeight: "800", textAlign: "center" }}>Messages</Text>
                    <View style={{ width: "100%", height: .5, backgroundColor: colors.borderColor, marginTop: 5 }} />
                    <ScrollView style={{ height: "102.5%" }}>
                        <SearchBox />
                        <View>
                            <ChatListItem
                                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                                newMessage={true}
                                totalMessage={4}
                                userName="Abdurrahman Cüce"
                                userMessage="Test mesajı"
                            />
                            <ChatListItem
                                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                                userName="Yusuf Yıldırım"
                                userMessage="Test mesajı"
                            />
                            <ChatListItem
                                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                                newMessage={true}
                                totalMessage={1}
                                userName="Yusuf Ziya Yıldırım"
                                userMessage="Test mesajı"
                            />
                            <ChatListItem
                                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                                userName="Abdurrahman Cüce"
                                userMessage="Test mesajı"
                            />
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </DismissKeyboard>
        </View>
    )
}

export default ChatsScreen