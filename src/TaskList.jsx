import Task from "./Task";

const TaskList = ({tasks, handleDelete, updatedTask}) => {
    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map( task => <Task 
                    key={task.id} 
                    task={task} 
                    handleDelete={handleDelete}
                    updatedTask={updatedTask}
                />)
            }
        </div>
    );
};

export default TaskList;