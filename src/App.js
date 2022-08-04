import { useState, useCallback, useMemo, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import tasks from './initialTasks';
import './App.css';


function App() {
  const [taskList, setTaskList] = useState(tasks);
  const [searchTerm, setSearchTerm] = useState('');

  const printTaskList = useCallback(() => {
    console.log("Changed List: ", taskList)
  }, [taskList]);

  useEffect(()=> {
    printTaskList();
  }, [taskList, printTaskList])

  const handleDelete = useCallback((id) => {
    const changedList = taskList.filter(task => task.id !== id);
    setTaskList(changedList);
  }, [taskList]);

  const handleUpdate = useCallback((updatedTask)=> {
    const changedList = taskList.filter(task => task.id !== updatedTask.id);
    setTaskList([...changedList, updatedTask]);
  }, [taskList]);

  const handleCreate = useCallback((name) => {
    setTaskList([...taskList, {id: Math.round(10000 * Math.random()), name}]);
  }, [taskList]);

  const handleSearch = (name) => {
    setSearchTerm(name);
  };

  const filteredTaskList = useMemo(() => taskList.filter((task) => {
    return task.name.toLowerCase().includes(searchTerm.toLowerCase());
  }), [searchTerm, taskList]);

  return (
    <div className="App">
      <TaskSearchForm handleSearch={handleSearch}/>
      <TaskForm handleCreate={handleCreate}/>
      <TaskList 
        tasks={filteredTaskList} 
        handleDelete={handleDelete} 
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
