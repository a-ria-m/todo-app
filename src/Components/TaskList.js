import React, { useState } from 'react';

const TaskList = ({ todos, addTodo, updateTodo, completeTodo, editTodo, removeTodo }) => {
    const [newTodo, setNewTodo] = useState('');
    const [editValue, setEditValue] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    };

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    };

    const handleSaveEdit = (index) => {
        updateTodo(index, editValue);
        setEditValue(''); 
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='mainform'>
                <input
                    type='text'
                    className='inputtodo'
                    placeholder='Write Task here'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type='submit' className='buttontodo'>
                    Add Task
                </button>
            </form>

            {todos.length === 0 ? (
                <p>No todos available. Add a todo to get started!</p>
            ) : (
                <ul className='listtodo'>
                    {todos.map((todo, index) => (
                        <li key={index} className='itemtodo'>
                            <span className={todo.completed ? 'completedtodo' : ''}>
                                {todo.edit ? (
                                    <input
                                        type='text'
                                        value={editValue}
                                        onChange={handleEditChange}
                                        className='inputedit'
                                    />
                                ) : (
                                    todo.task
                                )}
                            </span>

                            <div className='actionstodo'>
                                {todo.edit ? (
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleSaveEdit(index);
                                        }}
                                        className='buttonsave'
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => completeTodo(index)}
                                            disabled={todo.completed}
                                        >
                                            Complete
                                        </button>
                                        <button
                                            onClick={() => {
                                                setEditValue(todo.task);
                                                editTodo(index);
                                            }}
                                            disabled={todo.completed}
                                        >
                                            Edit
                                        </button>
                                        <button onClick={() => removeTodo(index)}>
                                            Remove
                                        </button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskList;
