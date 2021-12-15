import { db } from 'src/lib/db';

export const newItems = () => {
  return db.newItem.findMany();
};

export const newItem = ({ id }) => {
  return db.newItem.findUnique({
    where: { id },
  });
};

export const createNewItem = ({ input }) => {
  return db.newItem.create({
    data: input,
  });
};

export const updateNewItem = ({ id, input }) => {
  return db.newItem.update({
    data: input,
    where: { id },
  });
};

export const deleteNewItem = ({ id }) => {
  return db.newItem.delete({
    where: { id },
  });
};
