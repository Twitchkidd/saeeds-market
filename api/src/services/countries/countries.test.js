import {
  countries,
  country,
  createCountry,
  updateCountry,
  deleteCountry,
} from './countries';

describe('countries', () => {
  scenario('returns all countries', async scenario => {
    const result = await countries();

    expect(result.length).toEqual(Object.keys(scenario.country).length);
  });

  scenario('returns a single country', async scenario => {
    const result = await country({ id: scenario.country.one.id });

    expect(result).toEqual(scenario.country.one);
  });

  scenario('creates a country', async () => {
    const result = await createCountry({
      input: {
        name: 'String',
        abbr: 'String',
        flagUrl: 'String',
        imageUrl: 'String',
      },
    });

    expect(result.name).toEqual('String');
    expect(result.abbr).toEqual('String');
    expect(result.flagUrl).toEqual('String');
    expect(result.imageUrl).toEqual('String');
  });

  scenario('updates a country', async scenario => {
    const original = await country({ id: scenario.country.one.id });
    const result = await updateCountry({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a country', async scenario => {
    const original = await deleteCountry({ id: scenario.country.one.id });
    const result = await country({ id: original.id });

    expect(result).toEqual(null);
  });
});
