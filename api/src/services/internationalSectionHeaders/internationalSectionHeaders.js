import { db } from 'src/lib/db';

export const internationalSectionHeaders = () => {
  return db.internationalSectionHeader.findMany();
};

export const internationalSectionHeader = ({ id }) => {
  return db.internationalSectionHeader.findUnique({
    where: { id },
  });
};

export const createInternationalSectionHeader = ({ input }) => {
  return db.internationalSectionHeader.create({
    data: input,
  });
};

export const updateInternationalSectionHeader = ({ id, input }) => {
  return db.internationalSectionHeader.update({
    data: input,
    where: { id },
  });
};

export const deleteInternationalSectionHeader = ({ id }) => {
  return db.internationalSectionHeader.delete({
    where: { id },
  });
};
