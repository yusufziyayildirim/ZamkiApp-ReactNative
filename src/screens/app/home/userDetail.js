import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons';
import colors from '../../../theme/colors';
import { db } from '../../../constants/firebase';
import { collection, addDoc, where, query, onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';


const UserDetailScreen = ({ navigation, route }) => {
    const { userInfo } = useSelector(state => state.auth);
    const [chatId, setChatId] = useState("")
    const { user } = route.params
    let docRef1 = query(collection(db, "chats"), where('users', '==', [userInfo.email, user.email]))
    let docRef2 = query(collection(db, "chats"), where('users', '==', [user.email, userInfo.email]))

    useEffect(() => {
        onSnapshot(docRef1, (snapshot) => {
            snapshot.docs.map(item => {
                setChatId(item.id)
            })
        })
        onSnapshot(docRef2, (snapshot) => {
            snapshot.docs.map(item => {
                setChatId(item.id)
            })
        })
    }, [])

    const createOrGetChat = async () => {
        if (chatId) {
            navigation.navigate('Chat', { chatId: chatId })
        } else {
            const res = await addDoc(collection(db, "chats"), {
                users: [userInfo.email, user.email],
                usersName: [userInfo.name, user.name],
                messages: []
            })
            navigation.navigate('Chat', { chatId: res.id })
        }
    }

    return (
        <View style={{ backgroundColor: colors.gray, minHeight: "100%" }}>
            <View style={styles.headerWrap}>
                <SafeAreaView>
                    <View style={styles.headerContent}>
                        <View style={styles.userInfo}>
                            <TouchableOpacity
                                style={{ padding: 5 }}
                                onPress={
                                    () => navigation.goBack()
                                }
                            >
                                <FontAwesome name="chevron-left" size={20} color={colors.backgroundColor} />
                            </TouchableOpacity>
                            <Text style={styles.headerUserName}>
                                {user.name}
                            </Text>
                            <TouchableOpacity>
                                <FontAwesome style={styles.userReport} name="exclamation-circle" size={22} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ left: 0, right: 0, flexDirection: "row", width: "110%", position: "absolute", bottom: 60, alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
                            <View style={{ flexDirection: "row", alignItems: "centers", justifyContent: "center" }}>
                                <View style={{ width: 20, height: 20, backgroundColor: "green", borderRadius: 50 }} />
                                <Text style={{ paddingLeft: 5, paddingTop: 2, color: colors.backgroundColor, fontWeight: "700" }}>Active</Text>
                            </View>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "centers", justifyContent: "center" }}>
                                <Text style={{ paddingTop: 6, color: colors.backgroundColor, fontWeight: "700" }}>5</Text>
                                <FontAwesome style={{ marginLeft: 5, color: colors.backgroundColor }} name="commenting" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerUserImg}>
                            <FontAwesome name="user" size={50} color={colors.textGrey} />
                        </View>
                    </View>

                    <View style={{ height: "100%", paddingHorizontal: 20 }}>
                        <View style={styles.actionButtonWrap}>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="phone" size={24} color={colors.red} />
                                <Text style={styles.actionButtonText}>Voice</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <FontAwesome name="video-camera" size={24} color={colors.red} />
                                <Text style={styles.actionButtonText}>Video</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={createOrGetChat} style={styles.actionButton}>
                                <FontAwesome name="commenting" size={24} color={colors.red} />
                                <Text style={styles.actionButtonText}>Message</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.card}>
                            <Text style={{ fontWeight: "600", textAlign: "center" }}>I want to practice basic spanish and make some friends</Text>
                        </View>
                        <View>
                            <View style={styles.card}>
                                <Text style={styles.contentTitle}>Native in</Text>
                                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: colors.gray }} />
                                        <Text style={{ marginLeft: 5, fontWeight: "600" }}>Turkish (Türkçe)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.card}>
                                <Text style={styles.contentTitle}>Also Speaking</Text>
                                <View style={styles.cardItemWrap}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: colors.gray }} />
                                        <Text style={styles.cardItemText}>English</Text>
                                    </View>
                                </View>
                                <View style={styles.cardItemWrap}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: colors.gray }} />
                                        <Text style={styles.cardItemText}>German (Deutsch)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={styles.card}>
                                <Text style={styles.contentTitle}>Learning</Text>
                                <View style={styles.cardItemWrap}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: colors.gray }} />
                                        <Text style={styles.cardItemText}>Spanish (Espanyol)</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={[styles.learningItem, { backgroundColor: colors.red }]} />
                                        <View style={[styles.learningItem, { backgroundColor: colors.gray }]} />
                                        <View style={[styles.learningItem, { backgroundColor: colors.gray }]} />
                                    </View>
                                </View>
                                <View style={styles.cardItemWrap}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: colors.gray }} />
                                        <Text style={styles.cardItemText}>French (Français)</Text>
                                    </View>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={[styles.learningItem, { backgroundColor: colors.red }]} />
                                        <View style={[styles.learningItem, { backgroundColor: colors.red }]} />
                                        <View style={[styles.learningItem, { backgroundColor: colors.gray }]} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default UserDetailScreen


const styles = StyleSheet.create({
    headerWrap: {
        backgroundColor: colors.red,
        width: "100%",
        height: 170,
    },
    headerContent: {
        position: "relative",
        height: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
        zIndex: 10
    },
    userInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    userReport: {
        color: colors.backgroundColor,
        marginRight: 5
    },
    headerUserName: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
        textTransform: 'capitalize'
    },
    headerUserImg: {
        height: 120,
        width: 120,
        backgroundColor: colors.borderColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: colors.gray,
        bottom: -20
    },
    contentTitle: {
        color: colors.textGrey,
        fontSize: 14,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    actionButtonWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        justifyContent: "space-around"
    },
    actionButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 100,
        height: 70,
        borderRadius: 20
    },
    actionButtonText: {
        color: colors.red,
        fontWeight: "600",
        paddingTop: 3
    },
    card: {
        width: "100%",
        padding: 10,
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 10
    },
    cardItemWrap: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardItemText: {
        marginLeft: 5,
        fontWeight: "600"
    },
    learningItem: {
        width: 7,
        height: 20,
        marginLeft: 5
    }
})