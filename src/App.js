import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import Input from './components/Input';

function App() {
  const [tasks, settasks] = useState([]);

  const newtask = (task) => {
    settasks ([...tasks, [task, false]]);
  }
  const checktask = (i) => {
    let mytasks = [...tasks];
    if (mytasks[i][1] == false) {
      mytasks[i][1] = true;
    }
    else{
      mytasks[i][1] = false;
    }
    settasks(mytasks);

  }
  //const [task, settask] = useState([]);
  return (
    <>
      <div className="jumbotron bg-primary text-light text-center lead">To Do List</div>
      <div className="row">
        <div className="col-sm-4">
        <Input thetask={newtask}/>

        </div>
        <div className="col-sm-8">
          <Task tasks={tasks} onCheck={checktask} />
        </div>
      </div>
  
      
    </>
  );
}

export default App;
