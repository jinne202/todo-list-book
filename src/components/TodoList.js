import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todoItems, onRemove, onToggle}) => {
    const rowRender = useCallback(
        ({index, key, style}) => {
            const todo = todoItems[index];
            return (
                <TodoListItem
                    todo = {todo}
                    key = {key}
                    onRemove = {onRemove}
                    onToggle = {onToggle}
                    style = {style}
                />
            );
        }, [onRemove, onToggle, todoItems]
    )
    return (
        <List
            className = "TodoList"
            width = {512}
            height = {513}
            rowCount = {todoItems.length}
            rowHeight = {57}
            rowRenderer = {rowRender}
            list = {todoItems}
            style = {{outline : 'none'}}
        />
    );
};

export default React.memo(TodoList);