import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const tagLineTexts = () => {
  return db.tagLineText.findMany();
};

export const tagLineText = ({ id }) => {
  return db.tagLineText.findUnique({
    where: { id },
  });
};

export const createTagLineText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.tagLineText.create({
    data: input,
  });
};

export const updateTagLineText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.tagLineText.update({
    data: input,
    where: { id },
  });
};

export const deleteTagLineText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.tagLineText.delete({
    where: { id },
  });
};
