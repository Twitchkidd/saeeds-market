import { db } from 'src/lib/db';

export const productTypes = () => {
  return db.productType.findMany();
};

export const productType = ({ id }) => {
  return db.productType.findUnique({
    where: { id },
  });
};

export const createProductType = ({ input }) => {
  return db.productType.create({
    data: input,
  });
};

export const updateProductType = ({ id, input }) => {
  return db.productType.update({
    data: input,
    where: { id },
  });
};

export const deleteProductType = ({ id }) => {
  return db.productType.delete({
    where: { id },
  });
};

export const ProductType = {
  products: (_obj, { root }) =>
    db.productType.findUnique({ where: { id: root.id } }).products(),
};
