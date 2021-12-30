import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const whatsNewTexts = () => {
  return db.whatsNewText.findMany();
};

export const whatsNewText = ({ id }) => {
  return db.whatsNewText.findUnique({
    where: { id },
  });
};

export const createWhatsNewText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.whatsNewText.create({
    data: input,
  });
};

export const updateWhatsNewText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.whatsNewText.update({
    data: input,
    where: { id },
  });
};

export const deleteWhatsNewText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.whatsNewText.delete({
    where: { id },
  });
};
