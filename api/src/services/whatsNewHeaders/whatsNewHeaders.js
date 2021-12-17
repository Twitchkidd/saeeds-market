import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const whatsNewHeaders = () => {
  return db.whatsNewHeader.findMany();
};

export const whatsNewHeader = ({ id }) => {
  return db.whatsNewHeader.findUnique({
    where: { id },
  });
};

export const createWhatsNewHeader = ({ input }) => {
  requireAuth();
  return db.whatsNewHeader.create({
    data: input,
  });
};

export const updateWhatsNewHeader = ({ id, input }) => {
  requireAuth();
  return db.whatsNewHeader.update({
    data: input,
    where: { id },
  });
};

export const deleteWhatsNewHeader = ({ id }) => {
  requireAuth();
  return db.whatsNewHeader.delete({
    where: { id },
  });
};
