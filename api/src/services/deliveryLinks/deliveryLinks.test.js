import {
  deliveryLinks,
  deliveryLink,
  createDeliveryLink,
  updateDeliveryLink,
  deleteDeliveryLink,
} from './deliveryLinks';

describe('deliveryLinks', () => {
  scenario('returns all deliveryLinks', async (scenario) => {
    const result = await deliveryLinks();

    expect(result.length).toEqual(Object.keys(scenario.deliveryLink).length);
  });

  scenario('returns a single deliveryLink', async (scenario) => {
    const result = await deliveryLink({ id: scenario.deliveryLink.one.id });

    expect(result).toEqual(scenario.deliveryLink.one);
  });

  scenario('creates a deliveryLink', async () => {
    const result = await createDeliveryLink({
      input: { name: 'String', url: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.url).toEqual('String');
  });

  scenario('updates a deliveryLink', async (scenario) => {
    const original = await deliveryLink({ id: scenario.deliveryLink.one.id });
    const result = await updateDeliveryLink({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a deliveryLink', async (scenario) => {
    const original = await deleteDeliveryLink({
      id: scenario.deliveryLink.one.id,
    });

    const result = await deliveryLink({ id: original.id });

    expect(result).toEqual(null);
  });
});
