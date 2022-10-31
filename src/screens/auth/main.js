import { Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderTitle from "../../components/Auth/HeaderTitle";
import FocusAwareStatusBar from "../../components/FocusAwareStatusBar";

const MainScreen = ({ navigation }) => {
    return (
        <>
            <FocusAwareStatusBar barStyle="dark-content" />
            <View style={{ height: "100%", paddingHorizontal: 7, backgroundColor: "#f2f0fc" }}>
                <SafeAreaView>
                    <View style={{ height: "50%", backgroundColor: "black", borderRadius: 40, backgroundColor: "#db9cf8" }} >
                        <Image
                            style={{ height: "100%", width: "100%", borderRadius: 40 }}
                            source={require('../../assets/images/mainBg.webp')}
                        />
                    </View>
                    <View style={{ height: "50%", justifyContent: "space-around", paddingTop: 20 }}>

                        <View style={{ paddingHorizontal: 50 }}>
                            <HeaderTitle title={`Discover your \n Dream lang here`} subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        </View>

                        <View style={{ width: "100%", paddingHorizontal: 25 }}>
                            <View style={{ borderWidth: 1, borderColor: "white", height: 55, borderRadius: 15, flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: "#fff", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderTopRightRadius: 15, borderBottomRightRadius: 15, width: "50%", alignItems: "center", justifyContent: "center" }}
                                    onPress={() => navigation.navigate('Register')}
                                >
                                    <Text style={{ fontWeight: "600", color: "#373447" }}>Register</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ width: "50%", alignItems: "center", justifyContent: "center" }}
                                    onPress={() => navigation.navigate('Login')}
                                >
                                    <Text style={{ fontWeight: "600", color: "#373447" }}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </>
    )
}

export default MainScreen