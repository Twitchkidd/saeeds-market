import { db } from 'src/lib/db';

export const tagLines = () => {
  return db.tagLine.findMany();
};

export const tagLine = ({ id }) => {
  return db.tagLine.findUnique({
    where: { id },
  });
};

export const createTagLine = ({ input }) => {
  return db.tagLine.create({
    data: input,
  });
};

export const updateTagLine = ({ id, input }) => {
  return db.tagLine.update({
    data: input,
    where: { id },
  });
};

export const deleteTagLine = ({ id }) => {
  return db.tagLine.delete({
    where: { id },
  });
};
