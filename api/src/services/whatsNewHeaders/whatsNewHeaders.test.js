import {
  whatsNewHeaders,
  whatsNewHeader,
  createWhatsNewHeader,
  updateWhatsNewHeader,
  deleteWhatsNewHeader,
} from './whatsNewHeaders';

describe('whatsNewHeaders', () => {
  scenario('returns all whatsNewHeaders', async (scenario) => {
    const result = await whatsNewHeaders();

    expect(result.length).toEqual(Object.keys(scenario.whatsNewHeader).length);
  });

  scenario('returns a single whatsNewHeader', async (scenario) => {
    const result = await whatsNewHeader({
      id: scenario.whatsNewHeader.one.id,
    });

    expect(result).toEqual(scenario.whatsNewHeader.one);
  });

  scenario('creates a whatsNewHeader', async () => {
    const result = await createWhatsNewHeader({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a whatsNewHeader', async (scenario) => {
    const original = await whatsNewHeader({
      id: scenario.whatsNewHeader.one.id,
    });

    const result = await updateWhatsNewHeader({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a whatsNewHeader', async (scenario) => {
    const original = await deleteWhatsNewHeader({
      id: scenario.whatsNewHeader.one.id,
    });

    const result = await whatsNewHeader({ id: original.id });

    expect(result).toEqual(null);
  });
});
