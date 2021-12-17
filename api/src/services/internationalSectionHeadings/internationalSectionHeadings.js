import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const internationalSectionHeadings = () => {
  return db.internationalSectionHeading.findMany();
};

export const internationalSectionHeading = ({ id }) => {
  return db.internationalSectionHeading.findUnique({
    where: { id },
  });
};

export const createInternationalSectionHeading = ({ input }) => {
  requireAuth();
  return db.internationalSectionHeading.create({
    data: input,
  });
};

export const updateInternationalSectionHeading = ({ id, input }) => {
  requireAuth();
  return db.internationalSectionHeading.update({
    data: input,
    where: { id },
  });
};

export const deleteInternationalSectionHeading = ({ id }) => {
  requireAuth();
  return db.internationalSectionHeading.delete({
    where: { id },
  });
};
