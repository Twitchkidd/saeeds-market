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
  requireAuth({ role: 'admin' });
  return db.product.create({
    data: input,
  });
};

export const updateProduct = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.product.update({
    data: input,
    where: { id },
  });
};

export const deleteProduct = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.product.delete({
    where: { id },
  });
};

export const Product = {
  country: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).country(),
  type: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).type(),
};
