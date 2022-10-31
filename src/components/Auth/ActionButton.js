import { Text, TouchableOpacity } from "react-native";

const ActionButton = ({ value }) => {
    return (
        <TouchableOpacity
            style={{ backgroundColor: "#fc6b68", height: 55, borderRadius: 15, alignItems: "center", justifyContent: "center", marginTop: 10 }}
        // onPress={() => navigation.navigate('Register')}
        >
            <Text style={{ fontWeight: "600", color: "#fff" }}>{value}</Text>
        </TouchableOpacity>
    )
}

export default ActionButton