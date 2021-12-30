import {
  internationalSectionHeaders,
  internationalSectionHeader,
  createInternationalSectionHeader,
  updateInternationalSectionHeader,
  deleteInternationalSectionHeader,
} from './internationalSectionHeaders';

describe('internationalSectionHeaders', () => {
  scenario('returns all internationalSectionHeaders', async scenario => {
    const result = await internationalSectionHeaders();

    expect(result.length).toEqual(
      Object.keys(scenario.internationalSectionHeader).length
    );
  });

  scenario('returns a single internationalSectionHeader', async scenario => {
    const result = await internationalSectionHeader({
      id: scenario.internationalSectionHeader.one.id,
    });

    expect(result).toEqual(scenario.internationalSectionHeader.one);
  });

  scenario('creates a internationalSectionHeader', async () => {
    const result = await createInternationalSectionHeader({
      input: { text: 'String', withFrom: 'String' },
    });

    expect(result.text).toEqual('String');
    expect(result.withFrom).toEqual('String');
  });

  scenario('updates a internationalSectionHeader', async scenario => {
    const original = await internationalSectionHeader({
      id: scenario.internationalSectionHeader.one.id,
    });

    const result = await updateInternationalSectionHeader({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a internationalSectionHeader', async scenario => {
    const original = await deleteInternationalSectionHeader({
      id: scenario.internationalSectionHeader.one.id,
    });

    const result = await internationalSectionHeader({ id: original.id });

    expect(result).toEqual(null);
  });
});
