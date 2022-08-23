import Task from '../../types/task';
import { TASK_ACTIONS_TYPES } from '../../types/action';

const createAction = (type: TASK_ACTIONS_TYPES, payload: Task | number | string) => ({type, payload});

export default createAction;