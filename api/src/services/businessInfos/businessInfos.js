import { db } from 'src/lib/db';

export const businessInfos = () => {
  return db.businessInfo.findMany();
};

export const businessInfo = ({ id }) => {
  return db.businessInfo.findUnique({
    where: { id },
  });
};

export const createBusinessInfo = ({ input }) => {
  return db.businessInfo.create({
    data: input,
  });
};

export const updateBusinessInfo = ({ id, input }) => {
  return db.businessInfo.update({
    data: input,
    where: { id },
  });
};

export const deleteBusinessInfo = ({ id }) => {
  return db.businessInfo.delete({
    where: { id },
  });
};
