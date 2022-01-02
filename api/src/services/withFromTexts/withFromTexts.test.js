import {
  withFromTexts,
  withFromText,
  createWithFromText,
  updateWithFromText,
  deleteWithFromText,
} from './withFromTexts';

describe('withFromTexts', () => {
  scenario('returns all withFromTexts', async scenario => {
    const result = await withFromTexts();

    expect(result.length).toEqual(Object.keys(scenario.withFromText).length);
  });

  scenario('returns a single withFromText', async scenario => {
    const result = await withFromText({ id: scenario.withFromText.one.id });

    expect(result).toEqual(scenario.withFromText.one);
  });

  scenario('creates a withFromText', async () => {
    const result = await createWithFromText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a withFromText', async scenario => {
    const original = await withFromText({ id: scenario.withFromText.one.id });
    const result = await updateWithFromText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a withFromText', async scenario => {
    const original = await deleteWithFromText({
      id: scenario.withFromText.one.id,
    });

    const result = await withFromText({ id: original.id });

    expect(result).toEqual(null);
  });
});
