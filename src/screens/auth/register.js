import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "../../components/Auth/ActionButton";
import BottomLink from "../../components/Auth/BottomLink";
import HeaderTitle from "../../components/Auth/HeaderTitle";
import InputBox from "../../components/Auth/InputBox";
import DismissKeyboard from "../../components/DismissKeyboard";

import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

const RegisterScreen = ({ navigation }) => {
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
                            <InputBox placeholder="Password Confrim" />
                            <ActionButton value="Register" />
                        </View>
                        <BottomLink navigation={navigation} message="Already have an account?" linkMessage="Sign In" link="Login" />
                    </SafeAreaView>
                </View>
            </DismissKeyboard>
        </>
    )
}

export default RegisterScreen