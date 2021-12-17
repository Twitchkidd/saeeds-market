import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const titles = () => {
  return db.titles.findMany();
};

export const title = ({ id }) => {
  return db.titles.findUnique({
    where: { id },
  });
};

export const createTitle = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.titles.create({
    data: input,
  });
};

export const updateTitle = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.titles.update({
    data: input,
    where: { id },
  });
};

export const deleteTitle = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.titles.delete({
    where: { id },
  });
};
