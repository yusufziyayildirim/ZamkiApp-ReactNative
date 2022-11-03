import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../store/auth/authActions";
import { reset } from "../../store/auth/authSlice";

import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import DismissKeyboard from "../../components/DismissKeyboard";
import InputBox from "../../components/Auth/InputBox";
import ActionButton from "../../components/Auth/ActionButton";
import BottomLink from "../../components/Auth/BottomLink";
import HeaderTitle from "../../components/Auth/HeaderTitle";

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loading, error } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch()


    const submitForm = () => {
        dispatch(userLogin({ email, password }))
        if (error) {
            setPassword("")
        }
    }

    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <View style={{ paddingTop: 50, height: "100%", paddingHorizontal: 7, backgroundColor: "#f2f0fc" }}>
                    <SafeAreaView>
                        <HeaderTitle title="Hello Again!" subTitle={`Wellcome back you've \n been missed!`} />
                        {error && (
                            <Text style={{ color: "red", textAlign: "center", marginTop: 15 }} >{error}</Text>
                        )}
                        <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
                            <InputBox placeholder="Email" value={email} onChange={setEmail} />
                            <InputBox placeholder="Password" value={password} onChange={setPassword} />

                            <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
                                <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword'); dispatch(reset()) }}>
                                    <Text style={{ fontWeight: "500", color: "#5f5f6c", marginRight: 5, textAlign: "right", paddingRight: 5 }}>
                                        Forgot Password
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <ActionButton disabled={loading} value="Sıgn In" onPress={submitForm} />
                            {error == "Verify e-mail address" && (
                                <ActionButton disabled={loading} value="Verify Email"
                                    onPress={
                                        () => navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'VerifyEmail' }],
                                        })
                                    }
                                />
                            )}
                        </View>

                        <BottomLink navigation={navigation} message="Not a member?" linkMessage="Register now" link="Register" />
                    </SafeAreaView>


                </View>
            </DismissKeyboard>
        </ >
    )
}

export default LoginScreen