import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth/authActions";

import ActionButton from "../../components/Auth/ActionButton";
import BottomLink from "../../components/Auth/BottomLink";
import HeaderTitle from "../../components/Auth/HeaderTitle";
import InputBox from "../../components/Auth/InputBox";
import DismissKeyboard from "../../components/DismissKeyboard";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import colors from "../../theme/colors";

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");

    const { loading, error, success } = useSelector(
        (state) => state.auth
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (success) {
            setName("")
            setEmail("")
            setPassword("")
            setPassword_confirmation("")
        }
        if (error) {
            setPassword("")
            setPassword_confirmation("")
        }
    }, [error, success])

    const submitForm = () => {
        dispatch(registerUser({ name, email, password, password_confirmation }))
    }
    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <KeyboardAwareScrollView>
                    <View style={{ paddingTop: 50, height: "100%", paddingHorizontal: 7, backgroundColor: colors.gray }}>
                        <SafeAreaView>
                            <HeaderTitle title="Hello Again!" subTitle={`Wellcome back you've \n been missed!`} />
                            {error && (
                                <Text style={{ color: "red", textAlign: "center", marginTop: 15 }} >{error}</Text>
                            )}
                            {success && (
                                <Text style={{ color: "green", textAlign: "center", marginTop: 15 }} >{success}</Text>
                            )}

                            <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
                                <InputBox placeholder="Name" value={name} onChange={setName} />
                                <InputBox placeholder="Email" value={email} onChange={setEmail} />
                                <InputBox placeholder="Password" value={password} onChange={setPassword} />
                                <InputBox placeholder="Password Confrim" value={password_confirmation} onChange={setPassword_confirmation} />
                                <ActionButton disabled={loading} value="Register" onPress={submitForm} />
                            </View>
                            <BottomLink navigation={navigation} message="Already have an account?" linkMessage="Sign In" link="Login" />



                        </SafeAreaView>
                    </View>
                </KeyboardAwareScrollView>
            </DismissKeyboard>
        </>
    )
}

export default RegisterScreen