import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const tagLines = () => {
  return db.tagLines.findMany();
};

export const tagLine = ({ id }) => {
  return db.tagLines.findUnique({
    where: { id },
  });
};

export const createTagLine = ({ input }) => {
  requireAuth();
  return db.tagLines.create({
    data: input,
  });
};

export const updateTagLine = ({ id, input }) => {
  requireAuth();
  return db.tagLines.update({
    data: input,
    where: { id },
  });
};

export const deleteTagLine = ({ id }) => {
  requireAuth();
  return db.tagLines.delete({
    where: { id },
  });
};
