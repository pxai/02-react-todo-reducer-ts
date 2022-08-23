import React, { useCallback, useMemo, useReducer, Reducer } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskSearchForm from './TaskSearchForm';
import './App.css';
import createAction from './utils/reducer/reducer.utils';
import { initialTaskState, TaskState, taskReducer } from './reducers/task.reducer';
import Task from './types/task'; 
import { TASK_ACTIONS_TYPES, Action } from './types/action';

function App() {
  const [state, dispatch] = useReducer<Reducer<TaskState, Action>>(taskReducer, initialTaskState);

  useCallback(() => {
    console.log("Changed List: ", state.tasks)
  }, [state.tasks]);

  const handleDelete =(id: number) => {
    dispatch(createAction(TASK_ACTIONS_TYPES.REMOVE_TASK, id));
  };

  const handleUpdate = (updatedTask: Task)=> {
    dispatch(createAction(TASK_ACTIONS_TYPES.UPDATE_TASK, updatedTask))
  };

  const handleCreate = (name: string) => {
    dispatch(createAction(TASK_ACTIONS_TYPES.ADD_TASK, {id: Math.round(10000 * Math.random()), name}))
  };

  const handleSearch = (name: string) => {
    dispatch(createAction(TASK_ACTIONS_TYPES.SEARCH_TASK, name))
  };

  const filteredTaskList = useMemo( () => {
    return state.tasks.filter((task: Task) => {
      return task.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    })
  }, [state.searchTerm, state.tasks]);

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
