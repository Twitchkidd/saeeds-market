import {
  businessInfos,
  businessInfo,
  createBusinessInfo,
  updateBusinessInfo,
  deleteBusinessInfo,
} from './businessInfos';

describe('businessInfos', () => {
  scenario('returns all businessInfos', async scenario => {
    const result = await businessInfos();

    expect(result.length).toEqual(Object.keys(scenario.businessInfo).length);
  });

  scenario('returns a single businessInfo', async scenario => {
    const result = await businessInfo({ id: scenario.businessInfo.one.id });

    expect(result).toEqual(scenario.businessInfo.one);
  });

  scenario('creates a businessInfo', async () => {
    const result = await createBusinessInfo({
      input: {
        name: 'String',
        address: 'String',
        hours: 'String',
        number: 'String',
      },
    });

    expect(result.name).toEqual('String');
    expect(result.address).toEqual('String');
    expect(result.hours).toEqual('String');
    expect(result.number).toEqual('String');
  });

  scenario('updates a businessInfo', async scenario => {
    const original = await businessInfo({ id: scenario.businessInfo.one.id });
    const result = await updateBusinessInfo({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a businessInfo', async scenario => {
    const original = await deleteBusinessInfo({
      id: scenario.businessInfo.one.id,
    });

    const result = await businessInfo({ id: original.id });

    expect(result).toEqual(null);
  });
});
