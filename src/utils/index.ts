import { Task } from "../screens/Home";

export function sortNotDoneToDone<TaskType extends Task>(
    a: TaskType,
    b: TaskType
) {
    // anterior não feito, próximo sim
    if (!a.done && b.done) {
        return -1;
    }
    // anterior feito, próximo não
    if (a.done && !b.done) {
        return 1;
    }
    return 0;
}
