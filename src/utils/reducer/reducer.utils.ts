import Task from '../../types/task';

const createAction = (type: string, payload: Task | number | string) => ({type, payload});

export default createAction;