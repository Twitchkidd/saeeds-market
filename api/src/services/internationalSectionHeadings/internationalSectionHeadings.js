import { db } from 'src/lib/db';

export const internationalSectionHeadings = () => {
  return db.internationalSectionHeading.findMany();
};

export const internationalSectionHeading = ({ id }) => {
  return db.internationalSectionHeading.findUnique({
    where: { id },
  });
};

export const createInternationalSectionHeading = ({ input }) => {
  return db.internationalSectionHeading.create({
    data: input,
  });
};

export const updateInternationalSectionHeading = ({ id, input }) => {
  return db.internationalSectionHeading.update({
    data: input,
    where: { id },
  });
};

export const deleteInternationalSectionHeading = ({ id }) => {
  return db.internationalSectionHeading.delete({
    where: { id },
  });
};
