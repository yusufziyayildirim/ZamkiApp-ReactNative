import { useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/auth/authActions";

import ActionButton from "../../components/Auth/ActionButton";
import BottomLink from "../../components/Auth/BottomLink";
import HeaderTitle from "../../components/Auth/HeaderTitle";
import InputBox from "../../components/Auth/InputBox";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import DismissKeyboard from "../../components/DismissKeyboard";


const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const { loading, error, success } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch()

    const submitForm = () => {
        dispatch(forgotPassword({ email }))
    }
    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <KeyboardAwareScrollView>
                    <View style={{ paddingTop: 50, height: "100%", paddingHorizontal: 7, backgroundColor: "#f2f0fc" }}>
                        <SafeAreaView>
                            <HeaderTitle title="Hello Again!" subTitle={`Wellcome back you've \n been missed!`} />
                            {error && (
                                <Text style={{ color: "red", textAlign: "center", marginTop: 15 }} >{error}</Text>
                            )}
                            {success && (
                                <Text style={{ color: "green", textAlign: "center", marginTop: 15 }} >{success}</Text>
                            )}
                            <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
                                <InputBox placeholder="Email" value={email} onChange={setEmail} />
                                <ActionButton disabled={loading} value="Send" onPress={submitForm} />
                            </View>
                            <BottomLink navigation={navigation} message="Not a member?" linkMessage="Sing In" link="Login" />
                        </SafeAreaView>
                    </View>
                </KeyboardAwareScrollView>
            </DismissKeyboard>
        </>
    )
}

export default ForgotPasswordScreen