import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const menuLinks = () => {
  return db.menuLink.findMany();
};

export const menuLink = ({ id }) => {
  return db.menuLink.findUnique({
    where: { id },
  });
};

export const createMenuLink = ({ input }) => {
  requireAuth();
  return db.menuLink.create({
    data: input,
  });
};

export const updateMenuLink = ({ id, input }) => {
  requireAuth();
  return db.menuLink.update({
    data: input,
    where: { id },
  });
};

export const deleteMenuLink = ({ id }) => {
  requireAuth();
  return db.menuLink.delete({
    where: { id },
  });
};
