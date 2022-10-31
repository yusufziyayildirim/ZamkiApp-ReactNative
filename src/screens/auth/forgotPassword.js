import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ActionButton from "../../components/Auth/ActionButton";
import BottomLink from "../../components/Auth/BottomLink";
import HeaderTitle from "../../components/Auth/HeaderTitle";
import InputBox from "../../components/Auth/InputBox";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";
import DismissKeyboard from "../../components/DismissKeyboard";


const ForgotPasswordScreen = ({ navigation }) => {
    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <DismissKeyboard>
                <View style={{ paddingTop: 50, height: "100%", paddingHorizontal: 7, backgroundColor: "#f2f0fc" }}>
                    <SafeAreaView>
                        <HeaderTitle title="Hello Again!" subTitle={`Wellcome back you've \n been missed!`} />
                        <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
                            <InputBox placeholder="Email" />
                            <ActionButton value="Send" />
                        </View>
                        <BottomLink navigation={navigation} message="Not a member?" linkMessage="Sing In" link="Login" />
                    </SafeAreaView>
                </View>
            </DismissKeyboard>
        </>
    )
}

export default ForgotPasswordScreen