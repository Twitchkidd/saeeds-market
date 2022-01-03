import { db } from 'src/lib/db';
import { requireAuth } from 'src/lib/auth';

export const countries = () => {
  return db.country.findMany();
};

export const country = ({ id }) => {
  return db.country.findUnique({
    where: { id },
  });
};

export const createCountry = ({ input }) => {
  requireAuth({ role: 'admin' });
  return db.country.create({
    data: input,
  });
};

export const updateCountry = ({ id, input }) => {
  requireAuth({ role: 'admin' });
  return db.country.update({
    data: input,
    where: { id },
  });
};

export const deleteCountry = ({ id }) => {
  requireAuth({ role: 'admin' });
  return db.country.delete({
    where: { id },
  });
};

export const Country = {
  products: (_obj, { root }) =>
    db.country.findUnique({ where: { id: root.id } }).products(),
};
