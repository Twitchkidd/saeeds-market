import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const primaryCallToActionTexts = () => {
  return db.primaryCallToActionText.findMany();
};

export const primaryCallToActionText = ({ id }) => {
  return db.primaryCallToActionText.findUnique({
    where: { id },
  });
};

export const createPrimaryCallToActionText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.primaryCallToActionText.create({
    data: input,
  });
};

export const updatePrimaryCallToActionText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.primaryCallToActionText.update({
    data: input,
    where: { id },
  });
};

export const deletePrimaryCallToActionText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.primaryCallToActionText.delete({
    where: { id },
  });
};
