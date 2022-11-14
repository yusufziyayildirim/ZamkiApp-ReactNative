import { View, ScrollView, Text, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import DismissKeyboard from '../../components/DismissKeyboard'
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar'
import ChatListItem from '../../components/ChatListItem';
import SearchBox from '../../components/SearchBox';
import colors from '../../theme/colors';
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../constants/firebase';
import { useSelector } from 'react-redux';

const ChatsScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]);
    const { userInfo } = useSelector(state => state.auth);
    // console.log(userInfo[0])
    const colRef = query(collection(db, "chats"), where('users', 'array-contains', userInfo.email))
    useEffect(() => {
        return onSnapshot(colRef, (snapshot) => {
            setChats(snapshot.docs)
        })
    }, [])

    console.log(chats);

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
                            {
                                chats.map((item, i) => {
                                    console.log(item.data())
                                    if (item.data().messages[0]) {
                                        return (
                                            <TouchableOpacity key={i} onPress={() => navigation.navigate('Chat', { chatId: item.id })}>
                                                <ChatListItem
                                                    userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                                                    userName={item.data().usersName[item.data().users.findIndex(x => x != userInfo.email)]}
                                                    userMessage={item.data().messages[0].text}
                                                    />
                                            </TouchableOpacity>
                                        )
                                    }
                                })
                            }
                            {/* <ChatListItem
                                userImg="https://seamcline.com.ng/students/assets/images/users/1.jpg"
                                userName="Abdurrahman Cüce"
                                userMessage="Test mesajı"
                                newMessage={true}
                                totalMessage={4}
                            /> */}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </DismissKeyboard>
        </View>
    )
}

export default ChatsScreen