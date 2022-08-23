import TaskComponent from "./TaskComponent";
import Task from './types/task';

type TaskListProps = {
    tasks: Task[];
    handleDelete: (id: number) => void;
    handleUpdate: (task: Task) => void;
};
const TaskList = ({tasks, handleDelete, handleUpdate}: TaskListProps) => {

    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map( (task: Task) => <TaskComponent 
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