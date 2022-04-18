import gapless from '../lib/gapless/gapless';
import uuid from '../lib/uuid';

export type Todo = {
  id: string;
  text: string;
};

// In-memory list of todo items
let list: Todo[] = [];

// Gapless 😎 https://github.com/ChristopherWirtOfficial/gapless-functions-nextjs
export const getList = gapless<[], Todo[]>('getList', () => list);

export const addListeItem = gapless<[string, number | undefined], Todo[]>(
  'addListeItem',
  (text: string, max: number | undefined) => {
    list = [ ...list, { id: uuid(), text } ].slice(0, Math.min(list.length + 1, max || Infinity));

    return list;
  },
);

export const clearList = gapless<[], Todo[]>('clearList', () => {
  list.length = 0;

  return list;
});

export const deleteItem = gapless<[string], Todo[]>('deleteItem', (id: string) => {
  list = list.filter(item => item.id !== id);

  return list;
});
