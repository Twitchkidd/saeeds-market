import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const images = () => {
  return db.image.findMany();
};

export const image = ({ id }) => {
  return db.image.findUnique({
    where: { id },
  });
};

export const createImage = ({ input }) => {
  requireAuth({ roles: ['admin'] });
  return db.image.create({
    data: input,
  });
};

export const updateImage = ({ id, input }) => {
  requireAuth({ roles: ['admin'] });
  return db.image.update({
    data: input,
    where: { id },
  });
};

export const deleteImage = ({ id }) => {
  requireAuth({ roles: ['admin'] });
  return db.image.delete({
    where: { id },
  });
};
