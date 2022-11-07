import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { reset } from "../../store/auth/authSlice";
import colors from "../../theme/colors";

const ActionButton = ({ value, onPress = null, disabled = false }) => {

    const dispatch = useDispatch()

    const handlePress = () =>{
        dispatch(reset())
        onPress()
    }

    return (
        <TouchableOpacity
            disabled={disabled}
            style={{ backgroundColor: colors.red, height: 55, borderRadius: 15, alignItems: "center", justifyContent: "center", marginTop: 10 }}
            onPress={handlePress}
        >
            {disabled
                ? <Text style={{ fontWeight: "600", color: "#fff" }}>Yükleniyor</Text>
                : <Text style={{ fontWeight: "600", color: "#fff" }}>{value}</Text>
            }
        </TouchableOpacity>
    )
}

export default ActionButton