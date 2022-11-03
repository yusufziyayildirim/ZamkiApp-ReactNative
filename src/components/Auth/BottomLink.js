import { Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { reset } from "../../store/auth/authSlice";

const BottomLink = ({ navigation, message, linkMessage, link }) => {

    const dispatch = useDispatch()

    const handlePress = () => {
        dispatch(reset())
        navigation.reset({
            index: 0,
            routes: [{ name: link }],
        });
        // navigation.navigate()
    }

    return (

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 45 }}>
            <Text style={{ fontWeight: "600", color: "#5f5f6c", marginRight: 5 }}>
                {message}
            </Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={{ fontWeight: "600", color: "#8bb2e0" }}>
                    {linkMessage}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BottomLink