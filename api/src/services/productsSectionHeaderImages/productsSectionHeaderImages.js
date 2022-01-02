import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const productsSectionHeaderImages = () => {
  return db.productsSectionHeaderImage.findMany();
};

export const productsSectionHeaderImage = ({ id }) => {
  return db.productsSectionHeaderImage.findUnique({
    where: { id },
  });
};

export const createProductsSectionHeaderImage = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeaderImage.create({
    data: input,
  });
};

export const updateProductsSectionHeaderImage = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeaderImage.update({
    data: input,
    where: { id },
  });
};

export const deleteProductsSectionHeaderImage = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.productsSectionHeaderImage.delete({
    where: { id },
  });
};
