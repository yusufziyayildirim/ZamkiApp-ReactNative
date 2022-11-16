import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import colors from '../theme/colors';

function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.tabBarWrap}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                return (
                    <TouchableOpacity key={label} onPress={onPress} style={styles.tabBarButton}>
                        {
                            (label === "Home" && isFocused) ? (
                                <Ionicons name="people" size={28} color="black" />
                            ) : (
                                label == "Home" && (
                                    <Ionicons name="people-outline" size={28} />
                                )
                            )
                        }
                        {
                            (label === "Chats" && isFocused) ? (
                                <Ionicons name="chatbubbles" size={24} color="black" />
                            ) : (
                                label == "Chats" && (
                                    <Ionicons name="chatbubbles-outline" size={24} color={colors.secondary} />
                                )
                            )
                        }
                        {
                            (label === "Rooms" && isFocused) ? (
                                <Ionicons name="ios-logo-slack" size={24} color="black" />
                                // <FontAwesome5 name="slack" size={24} color="black" />
                            ) : (
                                label == "Rooms" && (
                                    <Feather name="slack" size={24} color={colors.secondary} />
                                )
                            )
                        }
                        {
                            (label === "Profile") && (
                                <Image
                                    style={{
                                        height: 24,
                                        width: 24,
                                        borderRadius: 100
                                    }}
                                    source={{ uri: "https://seamcline.com.ng/students/assets/images/users/1.jpg" }}
                                />
                            )
                        }
                        {isFocused && <View style={styles.indicator} />}
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default TabBar;

const styles = StyleSheet.create({
    tabBarWrap: {
        flexDirection: 'row',
        shadowColor: "#000",
        backgroundColor: colors.gray,
        shadowOpacity: 0.1,
        shadowRadius: 24,
        paddingBottom: 30,
        borderTopWidth: 0.5,
        borderTopColor: colors.borderColor
    },
    tabBarButton: {
        flex: 1,
        // justifyContent: "start",
        flexDirection: "col",
        alignItems: "center",
        paddingTop: 20,
        height: 56
    },
    indicator: {
        height: 4,
        width: 4,
        borderRadius: 100,
        backgroundColor: colors.red,
        marginTop: 5
    }
})