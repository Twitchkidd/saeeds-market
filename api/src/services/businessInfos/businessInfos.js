import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const businessInfos = () => {
  return db.businessInfo.findMany();
};

export const businessInfo = ({ id }) => {
  return db.businessInfo.findUnique({
    where: { id },
  });
};

export const createBusinessInfo = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.businessInfo.create({
    data: input,
  });
};

export const updateBusinessInfo = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.businessInfo.update({
    data: input,
    where: { id },
  });
};

export const deleteBusinessInfo = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.businessInfo.delete({
    where: { id },
  });
};
