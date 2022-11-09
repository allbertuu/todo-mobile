import { FunctionComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../screens/Home";
import TrashIcon from "../../../assets/trash.png";
import CheckIcon from "../../../assets/check.png";
import CheckFilledIcon from "../../../assets/check-filled.png";

import { styles } from "./styles";

interface TaskCardProps {
    task: Task;
    onRemove: () => void;
    onUpdate: () => void;
}

export const TaskCard: FunctionComponent<TaskCardProps> = ({
    task,
    onRemove,
    onUpdate,
}) => {
    if (task.done) {
        return (
            <View style={styles.containerDone} onTouchEnd={onUpdate}>
                <Image source={CheckFilledIcon} />
                <Text style={styles.textDone}>{task.text}</Text>
                <TouchableOpacity onPress={onRemove}>
                    <Image source={TrashIcon} />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container} onTouchEnd={onUpdate}>
            <Image source={CheckIcon} />
            <Text style={styles.text}>{task.text}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Image source={TrashIcon} />
            </TouchableOpacity>
        </View>
    );
};
