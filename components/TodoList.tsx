import { useEffect, useState } from 'react';
import { addListeItem as addListItem, clearList, deleteItem, getList, Todo } from '../functions/list';
import TodoItem from './TodoItem';

const TodoList: React.FC<{ label: string, placeholder: string, disabled?: boolean, required?: boolean, max?: number }> =
  ({
    label, placeholder, disabled = false, required = false, max,
  }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<string>('');

    // Use our gapless function to get the list of todos
    const getTodos = async () => {
      const todos = await getList();
      setTodos(todos);
    };

    // Init todos on mount
    useEffect(() => {
      getTodos();
    }, []);


    const clear = async () => {
      setTodos(await clearList());
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTodo(event.target.value);
    };

    // When the user adds a new todo, we add it to the list with a gapless function `addListItem`
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!todo.trim()) {
        return;
      }

      const newList = await addListItem(todo, max);
      setTodos(newList);

      setTodo('');
    };

    // Call the gapless deleteItem and set the todos back to the new list
    const handleDelete = async (id: string) => {
      setTodos(await deleteItem(id));
    };

    const showWarning = required && todos.length === 0;

    return (
      <div>
        <h3>{label}</h3>
        <form onSubmit={handleSubmit}>
          <input
            style={{ width: '80%' }}
            type="text"
            placeholder={placeholder}
            value={todo}
            onChange={handleChange}
            disabled={disabled}
            required={required}
          />
          <div style={{
            color: 'red',
            fontWeight: 'bold',
            height: '1rem',
            opacity: showWarning ? 1 : 0,
            transition: 'opacity 0.2s',
          }}>This field is required</div>
        </form>
        <ul>
          {todos.map(item => (<TodoItem key={item.id} todo={item} onDelete={id => handleDelete(id)} disabled={disabled} />))}
        </ul>
        <button disabled={disabled} type="button" onClick={clear}>Reset</button>
      </div>
    );
  };

export default TodoList;
