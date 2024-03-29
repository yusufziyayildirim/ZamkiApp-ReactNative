import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useTheme } from '@react-navigation/native';

//Store
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authActions";
import { reset } from "../../store/auth/authSlice";

//Components
import AuthInput from "../../components/AuthInput";
import AuthPageDesc from "../../components/AuthPageDesc";
import ActionButton from "../../components/ActionButton";
import DismissKeyboard from "../../components/DismissKeyboard";

const LoginScreen = ({ navigation }) => {
  const colors = useTheme().colors;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const { loading, error } = useSelector((state) => state.auth)

  const loginSubmit = () => {
    dispatch(login({ email, password }))
  }

  return (
    <SafeAreaView>
      <DismissKeyboard>
        <KeyboardAwareScrollView style={{ height: "100%" }}>
          <View style={{ paddingTop: 50, paddingHorizontal: 7, backgroundColor: colors.gray }}>
            <AuthPageDesc title="Hello Again!" subTitle={`Wellcome back you've \n been missed!`} />
            {error && (
              <Text style={{ color: "red", textAlign: "center", marginTop: 15 }} >{error}</Text>
            )}
            <View style={{ paddingHorizontal: 25, marginTop: 25 }}>
              <AuthInput placeholder="Email" value={email} onChange={setEmail} />
              <AuthInput secure={true} placeholder="Password" value={password} onChange={setPassword} />
              <View style={{ alignItems: "flex-end", marginBottom: 10 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword') }}>
                  <Text style={{ fontWeight: "500", color: colors.darkGray, marginRight: 5, textAlign: "right", paddingRight: 5 }}>
                    Forgot Password
                  </Text>
                </TouchableOpacity>
              </View>
              <ActionButton disabled={loading} value="Sıgn In" onPress={loginSubmit} />
              {error == "Verify e-mail address" && (
                <ActionButton disabled={false} value="Verify Email" onPress={() => navigation.navigate("VerifyEmail")} />
              )}
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 45 }}>
              <Text style={{ fontWeight: "600", color: colors.darkGray, marginRight: 5 }}>
                Not a member?
              </Text>
              <TouchableOpacity onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Register" }],
                });
                dispatch(reset())
              }}>
                <Text style={{ fontWeight: "600", color: "#8bb2e0" }}>
                  Register now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </DismissKeyboard>
    </SafeAreaView>
  )
}

export default LoginScreen