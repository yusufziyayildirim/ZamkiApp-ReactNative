import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from "react-redux";
import { logout } from '../../store/auth/authActions';
import ProfileListItem from '../../components/ProfileListItem';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../theme/colors';

const ProfileScreen = () => {
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);


    const dispatch = useDispatch()

    const handleLogout = async () => {
        dispatch(logout())
    }
    return (
        <View style={{ backgroundColor: colors.gray , minHeight: "100%" }}>
            <View style={styles.headerWrap}>
                <SafeAreaView>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerUserName}>
                            Yusuf Yıldırım
                        </Text>
                        <View style={styles.headerUserImg}>
                            <FontAwesome name="user" size={50} color={colors.textGrey} />
                        </View>
                    </View>
                </SafeAreaView>
            </View>

            <View>
                <Text style={styles.contentTitle}>Hesabım</Text>
                <TouchableOpacity>
                    <ProfileListItem title="Bilgilerim" icon="info" rightArrow={true} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ProfileListItem title="Change Password" icon="lock" rightArrow={true} />
                </TouchableOpacity>


                <Text style={styles.contentTitle}>Yardım</Text>
                <TouchableOpacity>
                    <ProfileListItem title="Sıkça Sorulan Sorular" icon="question-circle" rightArrow={true} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ProfileListItem title="Bize Ulaşın" icon="phone-square" rightArrow={true} />
                </TouchableOpacity>


                <Text style={styles.contentTitle}>Diğer</Text>
                <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
                    <ProfileListItem title="Çıkış yap" icon="arrow-right" rightArrow={false} />
                </TouchableOpacity>
            </View>

            {logoutModalVisible &&
                <View style={styles.logoutModalWrap}>
                    <View
                        style={styles.logoutModalContent}>
                        <Text style={{ fontSize: 17, fontWeight: "600" }}>Çıkış yapmak istediğinize emin misiniz?</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={handleLogout} style={styles.logoutModalButton}>
                                <Text style={{ color: "white" }}>Çıkış Yap</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLogoutModalVisible(false)} style={styles.logoutModalButton}>
                                <Text style={{ color: "white" }}>İptal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

export default ProfileScreen


const styles = StyleSheet.create({
    headerWrap: {
        backgroundColor: colors.red,
        width: "100%",
        height: 150
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
        bottom: -20,
        left: 20,
        fontSize: 24,
        fontWeight: "700"
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
        bottom: -50
    },
    contentTitle: {
        marginTop: 25,
        color: colors.textGrey,
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
        backgroundColor: colors.backgroundColor,
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
    },
    logoutModalButton: {
        width: "48%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.red
    }
})