import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const internationalSectionHeaders = () => {
  return db.internationalSectionHeader.findMany();
};

export const internationalSectionHeader = ({ id }) => {
  return db.internationalSectionHeader.findUnique({
    where: { id },
  });
};

export const createInternationalSectionHeader = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.internationalSectionHeader.create({
    data: input,
  });
};

export const updateInternationalSectionHeader = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.internationalSectionHeader.update({
    data: input,
    where: { id },
  });
};

export const deleteInternationalSectionHeader = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.internationalSectionHeader.delete({
    where: { id },
  });
};
