// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { addListItem, clearList, getList, Todo } from '../../../functions/list'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo[]>
) {
  if (req.method === 'POST') {
    addListItem(req.body.text, req.body.max);

    res.status(200).json(getList());
  } else if (req.method === 'DELETE') {
    clearList();

    res.status(200).json(getList());
  } else if (req.method === 'GET') {
    res.status(200).json(getList());
  }
};
