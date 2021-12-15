import {
  internationalSectionHeadings,
  internationalSectionHeading,
  createInternationalSectionHeading,
  updateInternationalSectionHeading,
  deleteInternationalSectionHeading,
} from './internationalSectionHeadings';

describe('internationalSectionHeadings', () => {
  scenario('returns all internationalSectionHeadings', async (scenario) => {
    const result = await internationalSectionHeadings();

    expect(result.length).toEqual(
      Object.keys(scenario.internationalSectionHeading).length
    );
  });

  scenario('returns a single internationalSectionHeading', async (scenario) => {
    const result = await internationalSectionHeading({
      id: scenario.internationalSectionHeading.one.id,
    });

    expect(result).toEqual(scenario.internationalSectionHeading.one);
  });

  scenario('creates a internationalSectionHeading', async () => {
    const result = await createInternationalSectionHeading({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a internationalSectionHeading', async (scenario) => {
    const original = await internationalSectionHeading({
      id: scenario.internationalSectionHeading.one.id,
    });

    const result = await updateInternationalSectionHeading({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a internationalSectionHeading', async (scenario) => {
    const original = await deleteInternationalSectionHeading({
      id: scenario.internationalSectionHeading.one.id,
    });

    const result = await internationalSectionHeading({ id: original.id });

    expect(result).toEqual(null);
  });
});
