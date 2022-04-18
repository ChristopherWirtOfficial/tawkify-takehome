import { NextApiRequest, NextApiResponse } from "next";
import { deleteItem, getList, Todo } from "../../../functions/list";

export default function handler(req: NextApiRequest, res: NextApiResponse<Todo[]>) {
  if (req.method === 'DELETE') {
    deleteItem(req.query.id as string);

    res.status(200).json(getList());
  } else {
    res.status(405).end();
  }
};
