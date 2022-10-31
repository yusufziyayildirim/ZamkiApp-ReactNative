import { Text, View } from "react-native";

const HeaderTitle = ({ title, subTitle }) => {
    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center", color: "#373447" }}>
                {title}
            </Text>
            <Text style={{ fontWeight: "normal", fontSize: 16, textAlign: "center", color: "#5f5f6c", marginTop: 15 }}>
                {subTitle}
            </Text>
        </View>
    )
}

export default HeaderTitle