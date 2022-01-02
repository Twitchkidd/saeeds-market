import {
  internationalSectionHeaderTexts,
  internationalSectionHeaderText,
  createInternationalSectionHeaderText,
  updateInternationalSectionHeaderText,
  deleteInternationalSectionHeaderText,
} from './internationalSectionHeaderTexts';

describe('internationalSectionHeaderTexts', () => {
  scenario('returns all internationalSectionHeaderTexts', async scenario => {
    const result = await internationalSectionHeaderTexts();

    expect(result.length).toEqual(
      Object.keys(scenario.internationalSectionHeaderText).length
    );
  });

  scenario(
    'returns a single internationalSectionHeaderText',
    async scenario => {
      const result = await internationalSectionHeaderText({
        id: scenario.internationalSectionHeaderText.one.id,
      });

      expect(result).toEqual(scenario.internationalSectionHeaderText.one);
    }
  );

  scenario('creates a internationalSectionHeaderText', async () => {
    const result = await createInternationalSectionHeaderText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a internationalSectionHeaderText', async scenario => {
    const original = await internationalSectionHeaderText({
      id: scenario.internationalSectionHeaderText.one.id,
    });

    const result = await updateInternationalSectionHeaderText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a internationalSectionHeaderText', async scenario => {
    const original = await deleteInternationalSectionHeaderText({
      id: scenario.internationalSectionHeaderText.one.id,
    });

    const result = await internationalSectionHeaderText({ id: original.id });

    expect(result).toEqual(null);
  });
});
