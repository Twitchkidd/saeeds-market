import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const weCarryTexts = () => {
  return db.weCarryText.findMany();
};

export const weCarryText = ({ id }) => {
  return db.weCarryText.findUnique({
    where: { id },
  });
};

export const createWeCarryText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.weCarryText.create({
    data: input,
  });
};

export const updateWeCarryText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.weCarryText.update({
    data: input,
    where: { id },
  });
};

export const deleteWeCarryText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.weCarryText.delete({
    where: { id },
  });
};
