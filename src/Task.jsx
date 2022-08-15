import { useState } from "react";

const Task = ({task, handleDelete, handleUpdate}) => {
    const [edit, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const setTask = (event) => {
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

export default Task;