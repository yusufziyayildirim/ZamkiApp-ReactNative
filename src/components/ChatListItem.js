import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '../theme/colors'

const ChatListItem = ({ newMessage, userImg, userName, userMessage, totalMessage }) => {
  return (
    <View style={newMessage ? styles.newMessageItemWrap : styles.itemWrap}>
      <Image source={{ uri: userImg }} style={styles.userImg} />
      <View style={{ paddingLeft: 15, height: 50, justifyContent: "space-around" }}>
        <Text style={{ fontSize: 17, fontWeight: "700", color: colors.textPrimary }}>{userName}</Text>
        <Text style={{ color: colors.secondary }}>{userMessage}</Text>
      </View>
      {totalMessage &&
        <View style={styles.newMessageWrap}>
          <Text style={{ color: "white", fontWeight: "700" }}>{totalMessage}</Text>
        </View>
      }
    </View>
  )
}

export default ChatListItem

const styles = StyleSheet.create({
  itemWrap: {
    position: "relative",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginLeft: 5,
    marginRight: 10,
    flexDirection: "row",
    marginTop: 15,
    height: 80,
    alignItems: "center"
  },
  newMessageItemWrap: {
    position: "relative",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginLeft: 5,
    marginRight: 10,
    flexDirection: "row",
    marginTop: 15,
    height: 80,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  userImg: {
    height: 50,
    width: 50,
    backgroundColor: "gray",
    borderRadius: 15
  },
  newMessageWrap: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: colors.red,
    borderRadius: 10
  }
})