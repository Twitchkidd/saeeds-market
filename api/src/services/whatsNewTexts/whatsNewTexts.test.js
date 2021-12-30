import {
  whatsNewTexts,
  whatsNewText,
  createWhatsNewText,
  updateWhatsNewText,
  deleteWhatsNewText,
} from './whatsNewTexts';

describe('whatsNewTexts', () => {
  scenario('returns all whatsNewTexts', async scenario => {
    const result = await whatsNewTexts();

    expect(result.length).toEqual(Object.keys(scenario.whatsNewText).length);
  });

  scenario('returns a single whatsNewText', async scenario => {
    const result = await whatsNewText({ id: scenario.whatsNewText.one.id });

    expect(result).toEqual(scenario.whatsNewText.one);
  });

  scenario('creates a whatsNewText', async () => {
    const result = await createWhatsNewText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a whatsNewText', async scenario => {
    const original = await whatsNewText({ id: scenario.whatsNewText.one.id });
    const result = await updateWhatsNewText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a whatsNewText', async scenario => {
    const original = await deleteWhatsNewText({
      id: scenario.whatsNewText.one.id,
    });

    const result = await whatsNewText({ id: original.id });

    expect(result).toEqual(null);
  });
});
