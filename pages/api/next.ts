import type { NextApiRequest, NextApiResponse } from 'next';

const data = [1, 2, 3];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(data);
  }

  if (req.method === 'POST') {
    data.push(4);
    res.status(201).end();
  }
}
