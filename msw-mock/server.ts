import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { data } from './data';

const address = 'http://localhost:3000/handle-data';

const handleGet = rest.get(address, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
});

export const server = setupServer(handleGet);
