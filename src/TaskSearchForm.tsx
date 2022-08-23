import { useState, ChangeEvent } from "react";

type TaskSearchFormProps = {
    handleSearch: (name: string) => void;
};

const TaskSearchForm = ({handleSearch}: TaskSearchFormProps) => {
    const [taskValue, setTaskValue] = useState('');
    const onSearch = () => {
        handleSearch(taskValue);
    };

    const onReset = () => {
        setTaskValue('');
        handleSearch('');
    };

    const handleSave = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleSave} />
            <button onClick={onSearch}>Search for task</button>
            <button onClick={onReset}>Clear</button>
        </div>
    );
};

export default TaskSearchForm;