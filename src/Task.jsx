import { useState } from "react";

const Task = ({task}) => {
    const [edit, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState(task.name);

    const handleEdit = () => {
        setEdit(true);
    };

    const handleSave = () => {
        // call save ({task.id, taskValue})
        setEdit(false);
    };

    const handleDelete = () => {
        // call function to delete
    };

    const setTask = (event) => {
        setTaskValue(event.target.value);
    };

    return (
        edit ?
            <div>
                <input type="text" value={taskValue} onChange={setTask}/>
                <button onClick={handleSave}>Save</button>
            </div>
        :   <div>
                {task.id}
                {task.name}
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Edit</button>
            </div>
    )
};

export default Task;