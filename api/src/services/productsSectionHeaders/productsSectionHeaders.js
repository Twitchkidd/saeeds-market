import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const productsSectionHeaders = () => {
  return db.productsSectionHeader.findMany();
};

export const productsSectionHeader = ({ id }) => {
  return db.productsSectionHeader.findUnique({
    where: { id },
  });
};

export const createProductsSectionHeader = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeader.create({
    data: input,
  });
};

export const updateProductsSectionHeader = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeader.update({
    data: input,
    where: { id },
  });
};

export const deleteProductsSectionHeader = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeader.delete({
    where: { id },
  });
};
