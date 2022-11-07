import { View, Text, TouchableOpacity, Image } from 'react-native'

const UserListItem = ({ userImg, userName, userDetail, speaks, learns }) => {
    return (
        <TouchableOpacity style={{ width: "100%", paddingHorizontal: 20, flexDirection: "row", marginTop: 15, height: 100, alignItems: "center", borderTopWidth: .4, paddingTop: 15 }}>
            <Image style={{ height: 90, width: 90, borderRadius: 15 }} source={{ uri: userImg }} />
            <View style={{ width: "100%", paddingLeft: 15, paddingRight: 15, height: 85, justifyContent: "space-between" }}>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: "700", marginBottom: 5 }}>{userName}</Text>
                    <Text style={{ maxWidth: "80%" }}>{userDetail}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>Speaks:</Text>
                        <View style={{ width: 20, height: 20, backgroundColor: "#FCF55F", borderRadius: 50, marginLeft: 5 }} />
                        <View style={{ width: 20, height: 20, backgroundColor: "blue", borderRadius: 50, marginLeft: 5 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
                        <Text>Learns:</Text>
                        <View style={{ width: 20, height: 20, backgroundColor: "#FCF55F", borderRadius: 50, marginLeft: 5 }} />
                        <View style={{ width: 20, height: 20, backgroundColor: "blue", borderRadius: 50, marginLeft: 5 }} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default UserListItem