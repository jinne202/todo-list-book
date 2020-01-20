import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const todoArray = [];
  for (let i = 1; i <=2500; i++){
    todoArray.push({
      id : i,
      text : `할 일 ${i}`,
      checekd : false
    });
  }
  return todoArray;
}

const App = () => {
  const [todoItems, setTodoItems] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      setTodoItems(todoItems => todoItems.concat(todo));
      nextId.current += 1;
    },[]);

  const onRemove = useCallback(
    (id) => {
      setTodoItems(todoItems => todoItems.filter(todo => todo.id !== id));
    }, []);

  const onToggle = useCallback(
    (id) => {
      setTodoItems(
        todoItems => todoItems.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo
        )
      )
    }, []);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert = {onInsert}/>
        <TodoList todoItems={todoItems} onRemove = {onRemove} onToggle = {onToggle}/>
      </TodoTemplate>
    </div>
  )
}

export default App;
