import Task from './task';

type Action = {
    type: string;
    payload: number | string | Task;
};

export default Action;