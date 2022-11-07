import { TouchableOpacity, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const SearchBox = () => {
    const [search, setSearch] = useState("")

    const onClear = () => {
        setSearch("")
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={{ position: "relative" }}>
                <FontAwesome name="search" size={20} color="#A9A9A9" style={{ position: "absolute", top: 24, left: 30, zIndex: 5 }} />
                <TextInput placeholder='Search'
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                    style={{
                        marginHorizontal: 20,
                        backgroundColor: "#e5ecf0",
                        borderRadius: 10,
                        height: 40,
                        paddingRight: 20,
                        paddingLeft: 40,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        marginTop: 15
                    }}
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={onClear} style={{ zIndex: 65, position: "absolute", top: 23, right: 30, width: 30, height: 30, alignItems: "center" }}>
                        <FontAwesome name="close" size={24} color="#A9A9A9" />
                    </TouchableOpacity>
                )}
            </View>
        </TouchableWithoutFeedback>

    )
}

export default SearchBox