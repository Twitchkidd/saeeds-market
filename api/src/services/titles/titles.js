import { db } from 'src/lib/db';

export const titles = () => {
  return db.title.findMany();
};

export const title = ({ id }) => {
  return db.title.findUnique({
    where: { id },
  });
};

export const createTitle = ({ input }) => {
  return db.title.create({
    data: input,
  });
};

export const updateTitle = ({ id, input }) => {
  return db.title.update({
    data: input,
    where: { id },
  });
};

export const deleteTitle = ({ id }) => {
  return db.title.delete({
    where: { id },
  });
};
