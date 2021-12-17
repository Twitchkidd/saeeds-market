import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const products = () => {
  return db.product.findMany();
};

export const product = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  });
};

export const createProduct = ({ input }) => {
  requireAuth();
  return db.product.create({
    data: input,
  });
};

export const updateProduct = ({ id, input }) => {
  requireAuth();
  return db.product.update({
    data: input,
    where: { id },
  });
};

export const deleteProduct = ({ id }) => {
  requireAuth();
  return db.product.delete({
    where: { id },
  });
};
