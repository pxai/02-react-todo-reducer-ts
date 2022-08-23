import Task from './task';

export enum TASK_ACTIONS_TYPES {
    ADD_TASK,
    REMOVE_TASK,
    UPDATE_TASK,
    CREATE_TASK,
    SEARCH_TASK,
}

export type Action = {
    type: TASK_ACTIONS_TYPES;
    payload: number | string | Task;
};
