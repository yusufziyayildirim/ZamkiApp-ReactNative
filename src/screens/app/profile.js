import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from "react-redux";
import { logout } from '../../store/auth/authActions';
import ProfileListItem from '../../components/ProfileListItem';

import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const ProfileScreen = () => {
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);


    const dispatch = useDispatch()

    const handleLogout = async () => {
        dispatch(logout())
    }
    return (
        <View style={{ backgroundColor: "#eff3f5", minHeight: "100%" }}>
            <View style={{ backgroundColor: "#fc6b68", width: "100%", height: 150 }}>
                <SafeAreaView>
                    <View style={{ position: "relative", flexDirection: "row", height: "100%", paddingHorizontal: 20 }}>
                        <Text style={{ color: "white", position: "absolute", bottom: -20, left: 20, fontSize: 24, fontWeight: "700" }}>
                            Yusuf Yıldırım
                        </Text>
                        <View style={{ position: "absolute", height: 80, width: 80, backgroundColor: "white", alignItems: "center", justifyContent: "center", borderRadius: 20, right: 20, bottom: -50 }}>
                            <FontAwesome name="user" size={50} color="#A9A9A9" />
                        </View>
                    </View>
                </SafeAreaView>
            </View>

            <View>
                <Text style={{ marginTop: 25, color: "#A9A9A9", marginBottom: 15, paddingLeft: 20, fontSize: 14, fontWeight: "700" }}>Hesabım</Text>
                <TouchableOpacity>
                    <ProfileListItem title="Bilgilerim" icon="info" rightArrow={true} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ProfileListItem title="Change Password" icon="lock" rightArrow={true} />
                </TouchableOpacity>


                <Text style={{ marginTop: 25, color: "#A9A9A9", marginBottom: 15, paddingLeft: 20, fontSize: 14, fontWeight: "700" }}>Yardım</Text>
                <TouchableOpacity>
                    <ProfileListItem title="Sıkça Sorulan Sorular" icon="question-circle" rightArrow={true} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <ProfileListItem title="Bize Ulaşın" icon="phone-square" rightArrow={true} />
                </TouchableOpacity>


                <Text style={{ marginTop: 25, color: "#A9A9A9", marginBottom: 15, paddingLeft: 20, fontSize: 14, fontWeight: "700" }}>Diğer</Text>
                <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
                    <ProfileListItem title="Çıkış yap" icon="arrow-right" rightArrow={false} />
                </TouchableOpacity>
            </View>

            {logoutModalVisible &&
                <View style={{ height: "100%", width: "100%", position: "absolute", alignItems: "center", justifyContent: "center" }}>
                    <View
                        style={{
                            position: "absolute", height: 130, width: "70%", backgroundColor: "#eff3f5", borderRadius: 15, paddingVertical: 15, paddingHorizontal: 20,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                        }}>
                        <Text style={{ fontSize: 17, fontWeight: "600" }}>Çıkış yapmak istediğinize emin misiniz?</Text>
                        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={handleLogout} style={{ width: "48%", height: 40, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#fc6b68" }}>
                                <Text style={{ color: "white" }}>Çıkış Yap</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLogoutModalVisible(false)} style={{ width: "48%", height: 40, borderRadius: 10, alignItems: "center", justifyContent: "center", backgroundColor: "#fc6b68" }}>
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