import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const heroImages = () => {
  return db.heroImage.findMany();
};

export const heroImage = ({ id }) => {
  return db.heroImage.findUnique({
    where: { id },
  });
};

export const createHeroImage = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.heroImage.create({
    data: input,
  });
};

export const updateHeroImage = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.heroImage.update({
    data: input,
    where: { id },
  });
};

export const deleteHeroImage = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.heroImage.delete({
    where: { id },
  });
};
