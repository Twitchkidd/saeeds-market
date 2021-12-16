import { db } from 'src/lib/db';

export const tagLines = () => {
  return db.tagLines.findMany();
};

export const tagLine = ({ id }) => {
  return db.tagLines.findUnique({
    where: { id },
  });
};

export const createTagLine = ({ input }) => {
  return db.tagLines.create({
    data: input,
  });
};

export const updateTagLine = ({ id, input }) => {
  return db.tagLines.update({
    data: input,
    where: { id },
  });
};

export const deleteTagLine = ({ id }) => {
  return db.tagLines.delete({
    where: { id },
  });
};
