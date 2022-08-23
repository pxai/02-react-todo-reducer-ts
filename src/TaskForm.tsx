import { useState, ChangeEvent } from "react";
import Task from './types/task';

type TaskFormProps = {
    handleCreate: (name: string) => void;
}

const TaskForm = ({handleCreate}: TaskFormProps) => {
    const [taskValue, setTaskValue] = useState<string>('');
    const handleSave = () => {
        handleCreate(taskValue);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleChange} />
            <button onClick={handleSave}>Create task</button>
        </div>
    );
};

export default TaskForm;