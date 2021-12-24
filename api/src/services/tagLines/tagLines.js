import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const tagLines = () => {
  return db.tagLine.findMany();
};

export const tagLine = ({ id }) => {
  return db.tagLine.findUnique({
    where: { id },
  });
};

export const createTagLine = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.tagLine.create({
    data: input,
  });
};

export const updateTagLine = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.tagLine.update({
    data: input,
    where: { id },
  });
};

export const deleteTagLine = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.tagLine.delete({
    where: { id },
  });
};
