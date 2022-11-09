import { useState } from "react";
import { View, Text } from "react-native";
import routes from "../../../constants/routes";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from "react-redux";
import ActionButton from "../../../components/Auth/ActionButton";
import InputBox from "../../../components/Auth/InputBox";
import DismissKeyboard from "../../../components/DismissKeyboard";
import FocusAwareStatusBar from "../../../components/FocusAwareStatusBar";
import colors from "../../../theme/colors";

const ChangePasswordScreen = ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [new_password, setNew_password] = useState("")
    const [new_password_confirmation, setNew_password_confirmation] = useState("")
    const [loading, setLoading] = useState("")
    const [error, setError] = useState("")
    const [success, setSucces] = useState("")

    const { userToken } = useSelector((state) => state.auth);

    const handleChangePassword = async () => {
        try {
            setLoading(true)
            setError("")
            setSucces("")
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            }
            const response = await axios.post(
                routes.CHANGE_PASSWORD,
                { password, new_password, new_password_confirmation },
                config
            )
            if (response.data.status) {
                setPassword("")
                setNew_password("")
                setNew_password_confirmation("")
                setLoading(false)
                setSucces(response.data.message)
            }

        } catch (error) {
            setLoading(false)
            setError(error.response.data.message)
        }
    }

    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <KeyboardAwareScrollView>
                    <View style={{ height: "100%", paddingHorizontal: 7, backgroundColor: colors.gray }}>
                        <SafeAreaView>
                            {error &&
                                <Text style={{ fontWeight: "normal", fontSize: 16, textAlign: "center", color: colors.red }}>
                                    {error}
                                </Text>
                            }
                            {success &&
                                <Text style={{ fontWeight: "normal", fontSize: 16, textAlign: "center", color: "green" }}>
                                    {success}
                                </Text>
                            }
                            <View style={{ marginTop: 25 }}>
                                <InputBox placeholder="Old Password" value={password} onChange={setPassword} />
                                <InputBox placeholder="New Password" value={new_password} onChange={setNew_password} />
                                <InputBox placeholder="New Password Confrim" value={new_password_confirmation} onChange={setNew_password_confirmation} />
                            </View>
                            <ActionButton disabled={loading} value="Save" onPress={handleChangePassword} />
                        </SafeAreaView>
                    </View>
                </KeyboardAwareScrollView>
            </DismissKeyboard>
        </>
    )
}

export default ChangePasswordScreen