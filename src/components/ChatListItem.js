import { View, Text, TouchableOpacity, Image } from 'react-native'

const ChatListItem = ({ newMessage, userImg, userName, userMessage, totalMessage }) => {
  return (
    <TouchableOpacity style={{
      position: "relative",
      borderRadius: 10,
      paddingHorizontal: 15,
      marginLeft: 5,
      marginRight: 10,
      flexDirection: "row",
      marginTop: 15,
      height: 80,
      alignItems: "center",
      backgroundColor: newMessage ? "white" : "",
      shadowColor: newMessage ? "#000" : "",
      shadowOffset: newMessage ? {
        width: 0,
        height: 2,
      } : "",
      shadowOpacity: newMessage ? 0.25 : "",
      shadowRadius: newMessage ? 3.84 : "",

    }}>
      <Image source={{ uri: userImg }} style={{ height: 50, width: 50, backgroundColor: "gray", borderRadius: 15 }} />
      <View style={{ paddingLeft: 15, height: 50, justifyContent: "space-around" }}>
        <Text style={{ fontSize: 17, fontWeight: "700" }}>{userName}</Text>
        <Text>{userMessage}</Text>
      </View>
      {totalMessage &&
        <View style={{ position: "absolute", alignItems: "center", justifyContent: "center", right: 20, width: 30, height: 30, backgroundColor: "#fc6b68", borderRadius: 10 }}>
          <Text style={{ color: "white", fontWeight: "700" }}>{totalMessage}</Text>
        </View>
      }

    </TouchableOpacity>
  )
}

export default ChatListItem