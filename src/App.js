import { useState, useCallback, useMemo, useEffect, useReducer } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import './App.css';
import { createAction } from './utils/reducer/reducer.utils';
import { TASKS_ACTION_TYPES, initialTaskState, taskReducer } from './reducers/task.reducer';


function App() {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const [searchTerm, setSearchTerm] = useState('');

  const printTaskList = useCallback(() => {
    console.log("Changed List: ", state.tasks)
  }, [state.tasks]);

  const handleDelete =(id) => {
    dispatch(createAction(TASKS_ACTION_TYPES.REMOVE_TASK, id));
  };

  const handleUpdate = (updatedTask)=> {
    dispatch(createAction(TASKS_ACTION_TYPES.UPDATE_TASK, updatedTask))
  };

  const handleCreate = (name) => {
    dispatch(createAction(TASKS_ACTION_TYPES.ADD_TASK, {id: Math.round(10000 * Math.random()), name}))
  };

  const handleSearch = (name) => {
    dispatch(createAction(TASKS_ACTION_TYPES.SEARCH_TASK, name))
  };

  const filteredTaskList = useMemo( () => {
    return state.tasks.filter((task) => {
      return task.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    })
  }, [searchTerm, state.tasks]);

  /*
  () => tasks.filter((task) => {
    return task.name.toLowerCase().includes(searchTerm.toLowerCase());
  }),
  */
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
