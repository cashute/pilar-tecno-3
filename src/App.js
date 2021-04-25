import React from 'react'
import { ToDoList } from './components/ToDoList/ToDoList'
import './App.css'

function App() {
  return (
    <>
    <div className="App">
      <div className="ToDo">
          <h2>Actividad N° 1</h2>
          <ToDoList />
      </div>
    </div>
    </>
  );
}

export default App;
