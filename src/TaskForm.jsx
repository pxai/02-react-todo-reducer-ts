import { useState } from "react";

const TaskForm = ({handleCreate}) => {
    const [taskValue, setTaskValue] = useState('');
    const handleSave = () => {
        handleCreate(taskValue);
    };

    const handleChange = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleSave}>Create task</button>
        </div>
    );
};

export default TaskForm;