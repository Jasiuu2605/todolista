import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task =>!task.active)
    
    
    
    if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate > b.finishDate) {
        return -1
      }
      if (a.finishDate < b.finishDate) {
        return 1
      }
      return 0
    })
  }
    

    if (active.length >= 2) {
      active.sort((a,b) => {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();

        if (a > b) return -1;
        if (a < b) return 1;
        return 0
      })
  }
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
    
      
    


    
    return (
      <>
        <div className="active">
          <h2>Zadania do zrobienia </h2>
          {activeTasks.length > 0 ? (
            activeTasks
          ) : (
            <p> Nie masz nic do roboty </p>
          )}
        </div>
        <hr />
        <div className="done">
          <h4>
            Zadania zrobione <em>{done.length}</em>
          </h4>
          {doneTasks.slice(0, 5)}
          {done.length > 5 && (
            <span style={{fontSize: "10px"}}>wyświetlonych jest 5 ostatnich elementów</span>
          )}
        </div>
      </>
    );
          }
 
export default TaskList;