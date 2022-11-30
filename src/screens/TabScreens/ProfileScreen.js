import { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

//Store
import { useSelector } from "react-redux";

//Components
import ActionButton from '../../components/ActionButton';
import ProfileListItem from '../../components/ProfileListItem';

const ProfileScreen = ({ navigation }) => {
    const colors = useTheme().colors;
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const { userInfo } = useSelector(state => state.auth)

    const logout = () => {

    }

    return (
        <SafeAreaView style={{ backgroundColor: colors.primary }}>
            <StatusBar barStyle='light-content' backgroundColor={colors.primary} />
            <View style={{ backgroundColor: colors.background, minHeight: "100%" }}>
                <View style={[styles.headerWrap, { backgroundColor: colors.primary }]}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerUserName}>
                            {userInfo.name}
                        </Text>
                        {
                            userInfo.img ? (
                                <Image
                                    style={styles.headerUserImg}
                                    source={{ uri: userInfo.img }}
                                />
                            ) : (
                                <View style={styles.headerUserImg}>
                                    <FontAwesome name="user" size={50} color={colors.textGrey} />
                                </View>
                            )
                        }
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[styles.contentTitle, { color: colors.darkGray }]}>Hesabım</Text>
                        <ProfileListItem onPress={() => { }} title="Edit profile" icon="info" rightArrow={true} />
                        <ProfileListItem onPress={() => { }} title="Account settings" icon="gear" rightArrow={true} />
                        <ProfileListItem onPress={() => { }} title="Change password" icon="lock" rightArrow={true} />
                    </View>

                    <View>
                        <Text style={[styles.contentTitle, { color: colors.darkGray }]}>Yardım</Text>
                        <ProfileListItem onPress={() => { }} title="FAQ" icon="question-circle" rightArrow={true} />
                        <ProfileListItem onPress={() => { }} title="Contact us" icon="phone-square" rightArrow={true} />
                    </View>

                    <View>
                        <Text style={[styles.contentTitle, { color: colors.darkGray }]}>Diğer</Text>
                        <ProfileListItem onPress={() => setLogoutModalVisible(true)} title="Logout" icon="arrow-right" rightArrow={false} />
                    </View>

                </View>

                {
                    logoutModalVisible &&
                    <View style={styles.logoutModalWrap}>
                        <View
                            style={[styles.logoutModalContent, { backgroundColor: colors.lightGray }]}>
                            <Text style={{ fontSize: 17, fontWeight: "600", color: colors.textPrimary }}>Are you sure you want to log out?</Text>
                            <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                                <ActionButton value="Logout" onPress={logout} width={120} height={40} />
                                <ActionButton value="Cancel" onPress={() => setLogoutModalVisible(false)} width={120} height={40} />
                            </View>
                        </View>
                    </View>
                }
            </View >
        </SafeAreaView>
    )
}

export default ProfileScreen


const styles = StyleSheet.create({
    headerWrap: {
        width: "100%",
        height: 100
    },
    headerContent: {
        position: "relative",
        flexDirection: "row",
        height: "100%",
        paddingHorizontal: 20
    },
    headerUserName: {
        color: "white",
        position: "absolute",
        bottom: 5,
        left: 20,
        fontSize: 24,
        fontWeight: "700",
        textTransform: 'capitalize'
    },
    headerUserImg: {
        position: "absolute",
        height: 80,
        width: 80,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        right: 20,
        bottom: -25
    },
    contentTitle: {
        marginTop: 25,
        marginBottom: 15,
        paddingLeft: 20,
        fontSize: 14,
        fontWeight: "700"
    },
    logoutModalWrap: {
        height: "100%",
        width: "100%",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    logoutModalContent: {
        position: "absolute",
        height: 130,
        width: "70%",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoutModalButton: {
        width: "48%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    }
})