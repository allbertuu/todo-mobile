import { FunctionComponent, useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} from "react-native";
import LogoImg from "../../../assets/Logo.png";
import PlusIcon from "../../../assets/Plus.png";
import ClipboardIcon from "../../../assets/Clipboard.png";
import { TaskCard } from "../../components/TaskCard";

import { styles } from "./styles";

const Separator = () => <View style={styles.separator} />;

export interface Task {
    text: string;
    done: boolean;
}

export const Home: FunctionComponent<any> = () => {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const createdTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.done).length;

    const handleAddTask = () => {
        const isTaskDuplicated = tasks.some(
            (task) => task.text.toLowerCase() === taskText.toLowerCase()
        );
        if (!taskText) {
            return Alert.alert(
                "Preencha corretamente ⚠",
                "Não pressione adicionar se não houver nada no campo.",
                [
                    {
                        text: "Entendido",
                    },
                ]
            );
        }
        if (isTaskDuplicated) {
            Alert.alert(
                "Essa tarefa já existe ⛔",
                "Se desejar, tente novamente com outras palavras.",
                [
                    {
                        text: "Certo",
                    },
                ]
            );
            return setTaskText("");
        }
        const payload = { text: taskText, done: false };
        setTasks((prevState) => [...prevState, payload]);
        setTaskText("");
    };

    const handleRemoveTask = (taskIdentifier: string) => {
        Alert.alert("Excluir tarefa ⛔", "Você deseja remover essa tarefa?", [
            {
                text: "Sim",
                onPress: () => {
                    setTasks((prevState) =>
                        prevState.filter((task) => task.text !== taskIdentifier)
                    );
                    Alert.alert("Tarefa apagada ✅");
                },
            },
            {
                text: "Não",
                style: "cancel",
            },
        ]);
    };

    const handleUpdateTask = (taskIdentifier: Task["text"]) => {
        const payload = tasks.map((task) => {
            if (task.text === taskIdentifier) {
                task.done = !task.done;
            }
            return task;
        });

        setTasks(payload);
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoBrand}>
                <Image source={LogoImg} />
            </View>

            <View style={styles.createNewTask}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    onChangeText={setTaskText}
                    value={taskText}
                />

                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="#4EA8DE"
                    style={styles.button}
                    onPress={handleAddTask}
                >
                    <Image source={PlusIcon} />
                </TouchableHighlight>
            </View>

            <View style={styles.tasks}>
                <View style={styles.tasksInfos}>
                    <View style={styles.infos}>
                        <Text style={styles.createdTasks}>Criadas</Text>
                        <Text style={styles.tasksCount}>{createdTasks}</Text>
                    </View>

                    <View style={styles.infos}>
                        <Text style={styles.completedTasks}>Concluídas</Text>
                        <Text
                            style={styles.tasksCount}
                        >{`${completedTasks} de ${createdTasks}`}</Text>
                    </View>
                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.text}
                    renderItem={({ item }) => (
                        <TaskCard
                            key={item.text}
                            task={item}
                            onUpdate={() => handleUpdateTask(item.text)}
                            onRemove={() => handleRemoveTask(item.text)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmpty}>
                            <Separator />
                            <Image source={ClipboardIcon} />
                            <Text style={styles.listEmptyTextMainTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptyTextSubtitle}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};
