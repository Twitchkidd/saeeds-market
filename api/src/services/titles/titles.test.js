import { titles, title, createTitle, updateTitle, deleteTitle } from './titles';

describe('titles', () => {
  scenario('returns all titles', async (scenario) => {
    const result = await titles();

    expect(result.length).toEqual(Object.keys(scenario.title).length);
  });

  scenario('returns a single title', async (scenario) => {
    const result = await title({ id: scenario.title.one.id });

    expect(result).toEqual(scenario.title.one);
  });

  scenario('creates a title', async () => {
    const result = await createTitle({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a title', async (scenario) => {
    const original = await title({ id: scenario.title.one.id });
    const result = await updateTitle({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a title', async (scenario) => {
    const original = await deleteTitle({ id: scenario.title.one.id });
    const result = await title({ id: original.id });

    expect(result).toEqual(null);
  });
});
