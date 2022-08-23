import tasks from '../initialTasks';
import Task from '../types/task';
import { TASK_ACTIONS_TYPES, Action } from '../types/action';

const addTaskToTasks = (tasks: Task[], taskToAdd: Task) => {
  return [...tasks, taskToAdd];  
};

const removeTaskFromTasks = (tasks: Task[], idToRemove: number) => {
    return tasks.filter( task => task.id !== idToRemove)
};

const updateTaskFromTasks = (tasks: Task[], taskToUpdate: Task) => {
    const filteredTasks = tasks.filter( task => task.id !== taskToUpdate.id);

    return [...filteredTasks, taskToUpdate];
}

export type TaskState = {
    taskTotal: number;
    isTasksEmpty: boolean;
    tasks: Task[];
    searchTerm: string;
}

export const initialTaskState: TaskState = {
    taskTotal: 0,
    isTasksEmpty: true,
    tasks,
    searchTerm: '',
}

export const taskReducer = (state: TaskState, action: Action) => {
    const {type, payload} = action;
    let changedTasks = null;
    switch (type) {
        case TASK_ACTIONS_TYPES.ADD_TASK:
                changedTasks = addTaskToTasks(state.tasks, payload as Task);
                return {
                    ...state,
                    taskTotal: changedTasks.length,
                    isTasksEmpty: changedTasks.length > 0,
                    tasks: changedTasks,
                };
        case TASK_ACTIONS_TYPES.UPDATE_TASK:
            changedTasks = updateTaskFromTasks(state.tasks, payload as Task);
            return {
                ...state,
                taskTotal: changedTasks.length,
                isTasksEmpty: changedTasks.length > 0,
                tasks: changedTasks
            };
        case TASK_ACTIONS_TYPES.REMOVE_TASK:
            changedTasks = removeTaskFromTasks(state.tasks, payload as number);
            return {
                ...state,
                taskTotal: changedTasks.length,
                isTasksEmpty: changedTasks.length > 0,
                tasks: changedTasks
            };
        case TASK_ACTIONS_TYPES.SEARCH_TASK:
            return {
                ...state,
                searchTerm: payload as string,
            };
        default:
            throw new Error(`Unhandled action for reducer: ${type}`)
    }
}

