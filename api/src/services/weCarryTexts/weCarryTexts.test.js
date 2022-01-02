import {
  weCarryTexts,
  weCarryText,
  createWeCarryText,
  updateWeCarryText,
  deleteWeCarryText,
} from './weCarryTexts';

describe('weCarryTexts', () => {
  scenario('returns all weCarryTexts', async scenario => {
    const result = await weCarryTexts();

    expect(result.length).toEqual(Object.keys(scenario.weCarryText).length);
  });

  scenario('returns a single weCarryText', async scenario => {
    const result = await weCarryText({ id: scenario.weCarryText.one.id });

    expect(result).toEqual(scenario.weCarryText.one);
  });

  scenario('creates a weCarryText', async () => {
    const result = await createWeCarryText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a weCarryText', async scenario => {
    const original = await weCarryText({ id: scenario.weCarryText.one.id });
    const result = await updateWeCarryText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a weCarryText', async scenario => {
    const original = await deleteWeCarryText({
      id: scenario.weCarryText.one.id,
    });

    const result = await weCarryText({ id: original.id });

    expect(result).toEqual(null);
  });
});
