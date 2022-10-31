import { TextInput } from "react-native";

const InputBox = ({placeholder}) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#bdbbc2"
            style={{
                height: 55,
                borderRadius: 15,
                backgroundColor: "white",
                color: "#111",
                paddingHorizontal: 22,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 24,
                marginBottom: 20
            }}
        />
    )
}

export default InputBox