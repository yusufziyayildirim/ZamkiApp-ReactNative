import { View, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome5 , Ionicons, AntDesign } from '@expo/vector-icons';
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
                            (label === "HomeStack" && isFocused) ? (
                                <Ionicons name="home" size={24} color="black" />
                            ) : (
                                label == "HomeStack" && (
                                    <Ionicons name="home-outline" size={24} color={colors.secondary} />
                                )
                            )
                        }
                        {
                            (label === "ChatsStack" && isFocused) ? (
                                <Ionicons name="chatbubbles" size={24} color="black" />
                            ) : (
                                label == "ChatsStack" && (
                                    <Ionicons name="chatbubbles-outline" size={24} color={colors.secondary} />
                                )
                            )
                        }
                        {
                            (label === "Rooms" && isFocused) ? (
                                <AntDesign name="star" size={24} color="black" />
                            ) : (
                                label == "Rooms" && (
                                    <AntDesign name="staro" size={24} color={colors.secondary} />
                                )
                            )
                        }
                        {
                            (label === "ProfileStack" && isFocused) ? (
                                <FontAwesome5  name="user-alt" size={22} color="black" />
                            ) : (
                                label == "ProfileStack" && (
                                    <FontAwesome5  name="user" size={23} color={colors.secondary} />
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
        backgroundColor: colors.gray,
        shadowOpacity: 0.1,
        shadowRadius: 24,
        paddingBottom: 30,
        borderTopWidth:0.5,
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