import React, { useEffect, useState } from 'react'
import { setDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from '../../constants/firebase';
import { GiftedChat } from 'react-native-gifted-chat'
import { View } from 'react-native';
import { useSelector } from "react-redux";

const ChatScreen = ({ route }) => {
    const { chatId } = route.params
    const [messages, setMessages] = useState([])
    const { userInfo } = useSelector(state => state.auth);

    const colRef = doc(db, "chats", chatId)
    useEffect(() => {
        //real time update
        return onSnapshot(colRef, (snapshot) => {
            setMessages(snapshot.data()?.messages ?? [])
        })
    }, [])

    const onSend = (m = []) => {
        setDoc(colRef,
            { messages: GiftedChat.append(messages, m) },
            { merge: true }
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <GiftedChat
                messages={messages.map(x => ({ ...x, createdAt: x?.createdAt?.toDate() }))}
                onSend={messages => onSend(messages)}
                // alignTop={true}
                bottomOffset={120}
                user={{
                    _id: userInfo.email,
                    name: userInfo.name,
                    // avatar: "avatar"
                }}
            />
        </View>
    )
}

const renderInputToolbar = () => {
    return (
        <View style={{ height: "100%" }}></View>
    )
}
export default ChatScreen