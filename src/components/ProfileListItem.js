import { View, Text } from 'react-native'

import { FontAwesome } from '@expo/vector-icons';


const ProfileListItem = ({ title, icon, rightArrow=false }) => {
    return (
        <View style={{ position: "relative", width: "100%", height: 55, backgroundColor: "white", flexDirection: "row", paddingHorizontal: 20, alignItems: "center" }}>
            <View style={{ width: 45, alignItems: "center" }}>
                <FontAwesome style={{ marginRight: 25 }} name={icon} size={24} color="black" />
            </View>
            <Text style={{ fontWeight: "700" }}>{title}</Text>
            {rightArrow && (
                <FontAwesome style={{ position: "absolute", right: 20 }} name="chevron-right" size={20} color="black" />
            )}
        </View>
    )
}

export default ProfileListItem