import { createContext, useState } from 'react';
import tasks from '../initialTasks';
import Task from '../types/task';
import Action from '../types/action';

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

export const TASKS_ACTION_TYPES = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    CREATE_TASK: 'CREATE_TASK',
    SEARCH_TASK: 'SEARCH_TASK',
};

export type taskState = {
    taskTotal: number;
    isTasksEmpty: boolean;
    tasks: Task[];
    searchTerm: string;
}

export const initialTaskState: taskState = {
    taskTotal: 0,
    isTasksEmpty: true,
    tasks,
    searchTerm: '',
}

export const taskReducer = (state: taskState, action: Action) => {
    const {type, payload} = action;
    let changedTasks = null;
    switch (type) {
        case TASKS_ACTION_TYPES.ADD_TASK:
                changedTasks = addTaskToTasks(state.tasks, payload as Task);
                return {
                    ...state,
                    taskTotal: changedTasks.length,
                    isTasksEmpty: changedTasks.length > 0,
                    tasks: changedTasks,
                };
        case TASKS_ACTION_TYPES.UPDATE_TASK:
            changedTasks = updateTaskFromTasks(state.tasks, payload as Task);
            return {
                ...state,
                taskTotal: changedTasks.length,
                isTasksEmpty: changedTasks.length > 0,
                tasks: changedTasks
            };
        case TASKS_ACTION_TYPES.REMOVE_TASK:
            changedTasks = removeTaskFromTasks(state.tasks, payload as number);
            return {
                ...state,
                taskTotal: changedTasks.length,
                isTasksEmpty: changedTasks.length > 0,
                tasks: changedTasks
            };
        case TASKS_ACTION_TYPES.SEARCH_TASK:
            return {
                ...state,
                searchTerm: payload,
            };
        default:
            throw new Error(`Unhandled action for reducer: ${type}`)
    }
}

