import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const newItems = () => {
  return db.newItem.findMany();
};

export const newItem = ({ id }) => {
  return db.newItem.findUnique({
    where: { id },
  });
};

export const createNewItem = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.newItem.create({
    data: input,
  });
};

export const updateNewItem = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.newItem.update({
    data: input,
    where: { id },
  });
};

export const deleteNewItem = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.newItem.delete({
    where: { id },
  });
};
