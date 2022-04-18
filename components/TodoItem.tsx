import { FC } from 'react';
import { Todo } from '../functions/list';

const TodoItem: FC<{ todo: Todo, onDelete: (id: string) => void, disabled?: boolean }> = ({ todo, onDelete, disabled }) => {
  const { id, text } = todo;

  return (
    <li
      style={{
        width: '80%',
      }}
      key={id}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
        }}
      >
        {text}
        <span
          style={{
            margin: '0.25rem 0',
            color: 'red',
            cursor: disabled ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
          }}
          onClick={disabled ? () => { } : () => onDelete(id)}
        >
          x
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
