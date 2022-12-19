import { rest, setupWorker } from 'msw';
import { data } from './data';

const address = '/handle-data';

const handleGet = rest.get(address, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(data));
});

const handlePost = rest.post(address, (req, res, ctx) => {
  data.push(4);
  return res(ctx.status(201));
});

export const worker = setupWorker(handleGet, handlePost);
