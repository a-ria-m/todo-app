import React from 'react';
import TodoForm from './Components/TodoForm';
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <h1> To-Do List </h1>
            <TodoForm />
        </div>
    );
};

export default App