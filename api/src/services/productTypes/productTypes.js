import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const productTypes = () => {
  return db.productType.findMany();
};

export const productType = ({ id }) => {
  return db.productType.findUnique({
    where: { id },
  });
};

export const createProductType = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.productType.create({
    data: input,
  });
};

export const updateProductType = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.productType.update({
    data: input,
    where: { id },
  });
};

export const deleteProductType = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.productType.delete({
    where: { id },
  });
};

export const ProductType = {
  products: (_obj, { root }) =>
    db.productType.findUnique({ where: { id: root.id } }).products(),
};
