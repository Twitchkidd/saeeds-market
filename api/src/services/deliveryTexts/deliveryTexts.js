import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const deliveryTexts = () => {
  return db.deliveryText.findMany();
};

export const deliveryText = ({ id }) => {
  return db.deliveryText.findUnique({
    where: { id },
  });
};

export const createDeliveryText = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.deliveryText.create({
    data: input,
  });
};

export const updateDeliveryText = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.deliveryText.update({
    data: input,
    where: { id },
  });
};

export const deleteDeliveryText = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.deliveryText.delete({
    where: { id },
  });
};
