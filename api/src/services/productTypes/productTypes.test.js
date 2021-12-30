import {
  productTypes,
  productType,
  createProductType,
  updateProductType,
  deleteProductType,
} from './productTypes';

describe('productTypes', () => {
  scenario('returns all productTypes', async scenario => {
    const result = await productTypes();

    expect(result.length).toEqual(Object.keys(scenario.productType).length);
  });

  scenario('returns a single productType', async scenario => {
    const result = await productType({ id: scenario.productType.one.id });

    expect(result).toEqual(scenario.productType.one);
  });

  scenario('creates a productType', async () => {
    const result = await createProductType({
      input: { name: 'String', important: true },
    });

    expect(result.name).toEqual('String');
    expect(result.important).toEqual(true);
  });

  scenario('updates a productType', async scenario => {
    const original = await productType({ id: scenario.productType.one.id });
    const result = await updateProductType({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a productType', async scenario => {
    const original = await deleteProductType({
      id: scenario.productType.one.id,
    });

    const result = await productType({ id: original.id });

    expect(result).toEqual(null);
  });
});
