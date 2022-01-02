import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const withFromTexts = () => {
  return db.withFromText.findMany();
};

export const withFromText = ({ id }) => {
  return db.withFromText.findUnique({
    where: { id },
  });
};

export const createWithFromText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.withFromText.create({
    data: input,
  });
};

export const updateWithFromText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.withFromText.update({
    data: input,
    where: { id },
  });
};

export const deleteWithFromText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.withFromText.delete({
    where: { id },
  });
};
