import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#262626",
        borderColor: "#333333",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        padding: 12,
        marginBottom: 8,
    },
    containerDone: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#262626",
        borderColor: "#262626",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        padding: 12,
        marginBottom: 8,
    },
    text: { color: "#FFF", flex: 1, marginHorizontal: 8, fontSize: 14 },
    textDone: {
        color: "#808080",
        flex: 1,
        marginHorizontal: 8,
        fontSize: 14,
        textDecorationLine: "line-through",
    },
});
