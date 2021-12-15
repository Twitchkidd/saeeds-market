import { db } from 'src/lib/db';

export const deliveryLinks = () => {
  return db.deliveryLink.findMany();
};

export const deliveryLink = ({ id }) => {
  return db.deliveryLink.findUnique({
    where: { id },
  });
};

export const createDeliveryLink = ({ input }) => {
  return db.deliveryLink.create({
    data: input,
  });
};

export const updateDeliveryLink = ({ id, input }) => {
  return db.deliveryLink.update({
    data: input,
    where: { id },
  });
};

export const deleteDeliveryLink = ({ id }) => {
  return db.deliveryLink.delete({
    where: { id },
  });
};
