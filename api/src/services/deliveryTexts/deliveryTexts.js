import { db } from 'src/lib/db';

export const deliveryTexts = () => {
  return db.deliveryText.findMany();
};

export const deliveryText = ({ id }) => {
  return db.deliveryText.findUnique({
    where: { id },
  });
};

export const createDeliveryText = ({ input }) => {
  return db.deliveryText.create({
    data: input,
  });
};

export const updateDeliveryText = ({ id, input }) => {
  return db.deliveryText.update({
    data: input,
    where: { id },
  });
};

export const deleteDeliveryText = ({ id }) => {
  return db.deliveryText.delete({
    where: { id },
  });
};
