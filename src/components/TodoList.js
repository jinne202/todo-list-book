import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todoItems, onRemove, onToggle}) => {
    return (
        <div className = "TodoList">
            {todoItems.map(todo =>(
                <TodoListItem todo = {todo} key = {todo.id} onRemove={onRemove} onToggle = {onToggle}/>
            ))}
        </div>
    );
};

export default TodoList;