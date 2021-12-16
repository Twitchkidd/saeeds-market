import { db } from 'src/lib/db';

export const menuLinks = () => {
  return db.menuLink.findMany();
};

export const menuLink = ({ id }) => {
  return db.menuLink.findUnique({
    where: { id },
  });
};

export const createMenuLink = ({ input }) => {
  return db.menuLink.create({
    data: input,
  });
};

export const updateMenuLink = ({ id, input }) => {
  return db.menuLink.update({
    data: input,
    where: { id },
  });
};

export const deleteMenuLink = ({ id }) => {
  return db.menuLink.delete({
    where: { id },
  });
};
