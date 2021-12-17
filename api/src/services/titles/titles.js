import { db } from 'src/lib/db';

export const titles = () => {
  return db.titles.findMany();
};

export const title = ({ id }) => {
  return db.titles.findUnique({
    where: { id },
  });
};

export const createTitle = ({ input }) => {
  requireAuth();
  return db.titles.create({
    data: input,
  });
};

export const updateTitle = ({ id, input }) => {
  requireAuth();
  return db.titles.update({
    data: input,
    where: { id },
  });
};

export const deleteTitle = ({ id }) => {
  requireAuth();
  return db.titles.delete({
    where: { id },
  });
};
