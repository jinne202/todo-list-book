import React, {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id : 1,
      text : '사피엔스',
      checked : true
    },
    {
      id : 2,
      text : '박막례 이대로 죽을 순 없다',
      checked : true
    },
    {
      id : 3,
      text : '신더 (cinder)',
      checked : false
    }
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      setTodoItems(todoItems.concat(todo));
      nextId.current += 1;
    },
    [todoItems]
  );

  const onRemove = useCallback(
    (id) => {
      setTodoItems(todoItems.filter(todo => todo.id !== id));
    }, [todoItems]
  );

  const onToggle = useCallback(
    (id) => {
      setTodoItems(
        todoItems.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked} : todo
        )
      )
    }, [todoItems]
  )

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
