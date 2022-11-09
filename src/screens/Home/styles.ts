import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#1A1A1A",
    },
    logoBrand: {
        backgroundColor: "#0D0D0D",
        height: 173,
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: "#262626",
        borderRadius: 6,
        fontSize: 16,
        padding: 16,
        color: "#F2F2F2",
        flex: 1,
        borderColor: "#0D0D0D",
        borderWidth: 1,
    },
    button: {
        padding: 18,
        backgroundColor: "#1E6F9F",
        borderRadius: 6,
        justifyContent: "center",
        marginLeft: 4,
    },
    createNewTask: {
        flexDirection: "row",
        height: 54,
        marginTop: 120,
    },
    tasks: {
        marginTop: 32,
    },
    createdTasks: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4EA8DE",
    },
    completedTasks: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#8284FA",
    },
    tasksInfos: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 21,
    },
    tasksCount: {
        color: "#FFF",
        marginLeft: 8,
        backgroundColor: "#333333",
        paddingVertical: 1,
        paddingHorizontal: 9,
        borderRadius: 999,
        fontSize: 12,
    },
    infos: {
        flexDirection: "row",
    },
    separator: {
        borderColor: "#262626",
        borderWidth: 1,
        alignSelf: "stretch",
        marginBottom: 48,
    },
    listEmpty: {
        alignItems: "center",
    },
    listEmptyTextMainTitle: {
        color: "#808080",
        fontWeight: "700",
        marginTop: 16,
    },
    listEmptyTextSubtitle: {
        color: "#808080",
    },
});
