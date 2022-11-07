import { View, Text, StyleSheet } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';
import colors from '../theme/colors';


const ProfileListItem = ({ title, icon, rightArrow = false }) => {
    return (
        <View style={styles.itemWrap}>
            <View style={{ width: 45, alignItems: "center" }}>
                <FontAwesome style={{ marginRight: 25 }} name={icon} size={24} color={colors.textPrimary} />
            </View>
            <Text style={{ fontWeight: "700", color: colors.textPrimary }}>{title}</Text>
            {rightArrow && (
                <FontAwesome style={{ position: "absolute", right: 20 }} name="chevron-right" size={20} color={colors.textPrimary} />
            )}
        </View>
    )
}

export default ProfileListItem


const styles = StyleSheet.create({
    itemWrap: {
        position: "relative",
        width: "100%",
        height: 55,
        backgroundColor: "white",
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center"
    }
})

