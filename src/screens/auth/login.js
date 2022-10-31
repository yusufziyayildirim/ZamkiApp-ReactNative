import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import DismissKeyboard from "../../components/DismissKeyboard";
import InputBox from "../../components/Auth/InputBox";
import ActionButton from "../../components/Auth/ActionButton";
import BottomLink from "../../components/Auth/BottomLink";
import HeaderTitle from "../../components/Auth/HeaderTitle";


const LoginScreen = ({ navigation }) => {
    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <View style={{ paddingTop: 50, height: "100%", paddingHorizontal: 7, backgroundColor: "#f2f0fc" }}>
                    <SafeAreaView>
                        <HeaderTitle title="Hello Again!" subTitle={`Wellcome back you've \n been missed!`} />
                        <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
                            <InputBox placeholder="Email" />
                            <InputBox placeholder="Password" />

                            <View style={{ alignItems: "flex-end", marginBottom:10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                    <Text style={{ fontWeight: "500", color: "#5f5f6c", marginRight: 5, textAlign: "right", paddingRight: 5 }}>
                                        Forgot Password
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <ActionButton value="Sıgn In" />
                        </View>

                        <BottomLink navigation={navigation} message="Not a member?" linkMessage="Register now" link="Register" />
                    </SafeAreaView>


                </View>
            </DismissKeyboard>
        </ >
    )
}

export default LoginScreen