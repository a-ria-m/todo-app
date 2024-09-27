import React, { useState } from 'react';
import TaskList from './TaskList';

const TodoForm = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = { task, completed: false, edit: false };
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (index, updatedTask) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, task: updatedTask, edit: false } : todo
        );
        setTodos(updatedTodos);
    };

    const completeTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: true } : todo
        );
        setTodos(updatedTodos);
    };

    const editTodo = (index) => {
        const updatedTodos = todos.map((todo, i) => 
            i === index ? { ...todo, edit: true } : todo
        );
        setTodos(updatedTodos);
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className='main'>
          
            <TaskList
                todos={todos}
                addTodo={addTodo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
                editTodo={editTodo}
                removeTodo={removeTodo}
            />
        </div>
    );
};

export default TodoForm;
