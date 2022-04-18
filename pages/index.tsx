import type { NextPage } from 'next';
import TodoList from '../components/TodoList';

const Home: NextPage = () => (
  <div>
    <TodoList
      label="Big ol' Projects"
      placeholder="Todo item..."
      max={5}
      required={true}
      disabled={false}
    />
  </div>
);

export default Home;
