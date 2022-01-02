import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const internationalSectionHeaderTexts = () => {
  return db.internationalSectionHeaderText.findMany();
};

export const internationalSectionHeaderText = ({ id }) => {
  return db.internationalSectionHeaderText.findUnique({
    where: { id },
  });
};

export const createInternationalSectionHeaderText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.internationalSectionHeaderText.create({
    data: input,
  });
};

export const updateInternationalSectionHeaderText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.internationalSectionHeaderText.update({
    data: input,
    where: { id },
  });
};

export const deleteInternationalSectionHeaderText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.internationalSectionHeaderText.delete({
    where: { id },
  });
};
