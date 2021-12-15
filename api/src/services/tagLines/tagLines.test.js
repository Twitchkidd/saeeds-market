import {
  tagLines,
  tagLine,
  createTagLine,
  updateTagLine,
  deleteTagLine,
} from './tagLines';

describe('tagLines', () => {
  scenario('returns all tagLines', async (scenario) => {
    const result = await tagLines();

    expect(result.length).toEqual(Object.keys(scenario.tagLine).length);
  });

  scenario('returns a single tagLine', async (scenario) => {
    const result = await tagLine({ id: scenario.tagLine.one.id });

    expect(result).toEqual(scenario.tagLine.one);
  });

  scenario('creates a tagLine', async () => {
    const result = await createTagLine({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a tagLine', async (scenario) => {
    const original = await tagLine({ id: scenario.tagLine.one.id });
    const result = await updateTagLine({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a tagLine', async (scenario) => {
    const original = await deleteTagLine({ id: scenario.tagLine.one.id });
    const result = await tagLine({ id: original.id });

    expect(result).toEqual(null);
  });
});
