import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 , Ionicons, AntDesign } from '@expo/vector-icons';

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
                                <Ionicons name="home" size={24} color="black" />
                            ) : (
                                label == "Home" && (
                                    <Ionicons name="home-outline" size={24} color="black" />
                                )
                            )
                        }
                        {
                            (label === "Chats" && isFocused) ? (
                                <Ionicons name="chatbubbles" size={24} color="black" />
                            ) : (
                                label == "Chats" && (
                                    <Ionicons name="chatbubbles-outline" size={24} color="black" />
                                )
                            )
                        }
                        {
                            (label === "Rooms" && isFocused) ? (
                                <AntDesign name="star" size={24} color="black" />
                            ) : (
                                label == "Rooms" && (
                                    <AntDesign name="staro" size={24} color="black" />
                                )
                            )
                        }
                        {
                            (label === "Profile" && isFocused) ? (
                                <FontAwesome5  name="user-alt" size={22} color="black" />
                            ) : (
                                label == "Profile" && (
                                    <FontAwesome5  name="user" size={23} color="black" />
                                )
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
        backgroundColor: "#eff3f5",
        shadowOpacity: 0.1,
        shadowRadius: 24,
        paddingBottom: 30
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
        backgroundColor: "red",
        marginTop: 5
    }
})