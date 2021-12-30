import {
  deliveryTexts,
  deliveryText,
  createDeliveryText,
  updateDeliveryText,
  deleteDeliveryText,
} from './deliveryTexts';

describe('deliveryTexts', () => {
  scenario('returns all deliveryTexts', async scenario => {
    const result = await deliveryTexts();

    expect(result.length).toEqual(Object.keys(scenario.deliveryText).length);
  });

  scenario('returns a single deliveryText', async scenario => {
    const result = await deliveryText({ id: scenario.deliveryText.one.id });

    expect(result).toEqual(scenario.deliveryText.one);
  });

  scenario('creates a deliveryText', async () => {
    const result = await createDeliveryText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a deliveryText', async scenario => {
    const original = await deliveryText({ id: scenario.deliveryText.one.id });
    const result = await updateDeliveryText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a deliveryText', async scenario => {
    const original = await deleteDeliveryText({
      id: scenario.deliveryText.one.id,
    });

    const result = await deliveryText({ id: original.id });

    expect(result).toEqual(null);
  });
});
