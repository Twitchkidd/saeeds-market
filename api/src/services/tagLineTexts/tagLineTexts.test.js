import {
  tagLineTexts,
  tagLineText,
  createTagLineText,
  updateTagLineText,
  deleteTagLineText,
} from './tagLineTexts';

describe('tagLineTexts', () => {
  scenario('returns all tagLineTexts', async scenario => {
    const result = await tagLineTexts();

    expect(result.length).toEqual(Object.keys(scenario.tagLineText).length);
  });

  scenario('returns a single tagLineText', async scenario => {
    const result = await tagLineText({ id: scenario.tagLineText.one.id });

    expect(result).toEqual(scenario.tagLineText.one);
  });

  scenario('creates a tagLineText', async () => {
    const result = await createTagLineText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a tagLineText', async scenario => {
    const original = await tagLineText({ id: scenario.tagLineText.one.id });
    const result = await updateTagLineText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a tagLineText', async scenario => {
    const original = await deleteTagLineText({
      id: scenario.tagLineText.one.id,
    });

    const result = await tagLineText({ id: original.id });

    expect(result).toEqual(null);
  });
});
