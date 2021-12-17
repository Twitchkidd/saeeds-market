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
  requireAuth({ role: 'admin' });
  return db.tagLines.create({
    data: input,
  });
};

export const updateTagLine = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.tagLines.update({
    data: input,
    where: { id },
  });
};

export const deleteTagLine = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.tagLines.delete({
    where: { id },
  });
};
