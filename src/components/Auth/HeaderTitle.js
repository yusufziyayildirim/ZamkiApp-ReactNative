import { Text, View } from "react-native";
import colors from "../../theme/colors";

const HeaderTitle = ({ title, subTitle }) => {
    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center", color: colors.primary }}>
                {title}
            </Text>
            <Text style={{ fontWeight: "normal", fontSize: 16, textAlign: "center", color: colors.secondary, marginTop: 15 }}>
                {subTitle}
            </Text>
        </View>
    )
}

export default HeaderTitle