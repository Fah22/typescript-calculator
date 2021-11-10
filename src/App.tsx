import React, {FC} from 'react';
import './App.css';


const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Enter Task" />
          <input type="text" placeholder="Deadline (in days)" />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todolist">

      </div>
    </div>
  );
}

export default App;
