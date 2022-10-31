import { Text, View, TouchableOpacity } from "react-native";

const BottomLink = ({ navigation, message, linkMessage, link }) => {
    return (

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 45 }}>
            <Text style={{ fontWeight: "600", color: "#5f5f6c", marginRight: 5 }}>
                {message}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(link)}>
                <Text style={{ fontWeight: "600", color: "#8bb2e0" }}>
                    {linkMessage}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomLink