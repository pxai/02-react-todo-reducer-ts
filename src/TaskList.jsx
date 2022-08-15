import Task from "./Task";

const TaskList = ({tasks, handleDelete, handleUpdate}) => {

    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map( task => <Task 
                    key={task.id} 
                    task={task} 
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />)
            }
        </div>
    );
};

export default TaskList;