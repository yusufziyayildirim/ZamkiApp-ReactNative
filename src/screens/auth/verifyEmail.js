import { useState } from "react";
import { View } from "react-native";
import routes from "../../constants/routes";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ActionButton from "../../components/Auth/ActionButton";
import HeaderTitle from "../../components/Auth/HeaderTitle";
import InputBox from "../../components/Auth/InputBox";
import DismissKeyboard from "../../components/DismissKeyboard";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import colors from "../../theme/colors";

const VerifyEmailScreen = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState("")
    const [message, setMessage] = useState("")

    const resendVerifyEmail = async () => {
        try {
            setLoading(true)
            setMessage("")
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            const response = await axios.post(
                routes.RESEND_NOTIFICATION,
                { email },
                config
            )
            if (response.data.status) {
                setEmail("")
                setLoading(false)
                setMessage(response.data.message)
            }

        } catch (error) {
            setLoading(false)
            setMessage(error.response.data.message)
        }
    }

    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <KeyboardAwareScrollView>
                    <View style={{ paddingTop: 50, height: "100%", paddingHorizontal: 7, backgroundColor: colors.gray }}>
                        <SafeAreaView>
                            <HeaderTitle title="Verify Email" subTitle={message} />
                            <View style={{ marginTop: 15 }}>
                                <InputBox placeholder="Email" value={email} onChange={setEmail} />
                            </View>
                            <ActionButton disabled={loading} value="Send verify email" onPress={resendVerifyEmail} />
                            <ActionButton
                                value="Go Back"
                                onPress={
                                    () => navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Login' }],
                                    })
                                }
                            />

                        </SafeAreaView>
                    </View>
                </KeyboardAwareScrollView>

            </DismissKeyboard>
        </>
    )
}

export default VerifyEmailScreen