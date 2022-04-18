import { v4 as uuid } from 'uuid';

export type Todo = {
  id: string;
  text: string;
};

// In-memory list of todo items
let list: Todo[] = [];

// Gapless 😎 https://github.com/ChristopherWirtOfficial/gapless-functions-nextjs
export const getList = () => list;

export const addListItem = (text: string, max: number | undefined) => {
  list = [...list, { id: uuid(), text }].slice(0, Math.min(list.length + 1, max || Infinity));

  return list;
};

export const clearList = () => {
  list.length = 0;

  return list;
};

export const deleteItem = (id: string) => {
  list = list.filter(item => item.id !== id);

  return list;
};
