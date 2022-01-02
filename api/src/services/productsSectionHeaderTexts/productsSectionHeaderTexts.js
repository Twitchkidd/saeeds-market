import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const productsSectionHeaderTexts = () => {
  return db.productsSectionHeaderText.findMany();
};

export const productsSectionHeaderText = ({ id }) => {
  return db.productsSectionHeaderText.findUnique({
    where: { id },
  });
};

export const createProductsSectionHeaderText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeaderText.create({
    data: input,
  });
};

export const updateProductsSectionHeaderText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeaderText.update({
    data: input,
    where: { id },
  });
};

export const deleteProductsSectionHeaderText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeaderText.delete({
    where: { id },
  });
};
