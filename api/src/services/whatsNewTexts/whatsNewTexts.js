import { db } from 'src/lib/db';

export const whatsNewTexts = () => {
  return db.whatsNewText.findMany();
};

export const whatsNewText = ({ id }) => {
  return db.whatsNewText.findUnique({
    where: { id },
  });
};

export const createWhatsNewText = ({ input }) => {
  return db.whatsNewText.create({
    data: input,
  });
};

export const updateWhatsNewText = ({ id, input }) => {
  return db.whatsNewText.update({
    data: input,
    where: { id },
  });
};

export const deleteWhatsNewText = ({ id }) => {
  return db.whatsNewText.delete({
    where: { id },
  });
};
