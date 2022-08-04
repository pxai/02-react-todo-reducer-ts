import { useState } from "react";

const TaskSearchForm = ({handleSearch}) => {
    const [taskValue, setTaskValue] = useState('');
    const onSearch = () => {
        handleSearch(taskValue);
    };

    const handleSave = (e) => {
        setTaskValue(e.target.value);
    };

    return (
        <div>
            <input type="text" value={taskValue} onChange={handleSave} />
            <button onClick={onSearch}>Search for task</button>
        </div>
    );
};

export default TaskSearchForm;