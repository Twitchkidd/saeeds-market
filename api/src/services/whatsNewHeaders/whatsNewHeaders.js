import { db } from 'src/lib/db';

export const whatsNewHeaders = () => {
  return db.whatsNewHeader.findMany();
};

export const whatsNewHeader = ({ id }) => {
  return db.whatsNewHeader.findUnique({
    where: { id },
  });
};

export const createWhatsNewHeader = ({ input }) => {
  return db.whatsNewHeader.create({
    data: input,
  });
};

export const updateWhatsNewHeader = ({ id, input }) => {
  return db.whatsNewHeader.update({
    data: input,
    where: { id },
  });
};

export const deleteWhatsNewHeader = ({ id }) => {
  return db.whatsNewHeader.delete({
    where: { id },
  });
};
