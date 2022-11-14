import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '../theme/colors'

const UserListItem = ({ userImg, userName, userDetail, speaks, learns }) => {
    return (
        <View style={styles.itemWrap}>
            <Image style={styles.userImg} source={{ uri: userImg }} />
            <View style={styles.contentWrap}>
                <View>
                    <Text style={{ fontSize: 17, fontWeight: "700", marginBottom: 5, color: colors.textPrimary }}>{userName}</Text>
                    <Text style={{ maxWidth: "80%", color: colors.secondary }}>{userDetail}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontWeight: "600", color: colors.primary }}>Speaks:</Text>
                        <View style={styles.flag} />
                        <View style={styles.flag} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 15 }}>
                        <Text style={{ fontWeight: "600", color: colors.primary }}>Learns:</Text>
                        <View style={styles.flag} />
                        <View style={styles.flag} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UserListItem


const styles = StyleSheet.create({
    itemWrap: {
        width: "100%",
        paddingHorizontal: 20,
        flexDirection: "row",
        marginTop: 15,
        height: 100,
        alignItems: "center",
        borderTopWidth: .5,
        borderTopColor: colors.borderColor,
        paddingTop: 15
    },
    userImg: {
        height: 90,
        width: 90,
        borderRadius: 15
    },
    contentWrap: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        height: 85,
        justifyContent: "space-between"
    },
    flag: {
        width: 20,
        height: 20,
        backgroundColor: "#FCF55F",
        borderRadius: 50,
        marginLeft: 5
    }
})