import { ChangeEvent, useState } from 'react';
import Task from './types/task';

type TaskComponentProps = {
    task: Task;
    handleDelete: (id: number) => void;
    handleUpdate: (task: Task) => void;
}

const TaskComponent = ({task, handleDelete, handleUpdate}: TaskComponentProps) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [taskValue, setTaskValue] = useState<string>(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const setTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    const updateTask = () => {
        handleUpdate({...task, name: taskValue });
        setEdit(false);
    }

    const deleteTask = () => {
        handleDelete(task.id);
    };

    return (
        edit ?
            <div>
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={updateTask}>Save</button>
            </div>
        :   <div>
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
    )
};

export default TaskComponent;