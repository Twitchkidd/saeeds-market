import { db } from 'src/lib/db';

export const productsSectionHeaders = () => {
  return db.productsSectionHeader.findMany();
};

export const productsSectionHeader = ({ id }) => {
  return db.productsSectionHeader.findUnique({
    where: { id },
  });
};

export const createProductsSectionHeader = ({ input }) => {
  return db.productsSectionHeader.create({
    data: input,
  });
};

export const updateProductsSectionHeader = ({ id, input }) => {
  return db.productsSectionHeader.update({
    data: input,
    where: { id },
  });
};

export const deleteProductsSectionHeader = ({ id }) => {
  return db.productsSectionHeader.delete({
    where: { id },
  });
};
