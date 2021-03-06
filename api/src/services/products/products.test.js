import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products';

describe('products', () => {
  scenario('returns all products', async scenario => {
    const result = await products();

    expect(result.length).toEqual(Object.keys(scenario.product).length);
  });

  scenario('returns a single product', async scenario => {
    const result = await product({ id: scenario.product.one.id });

    expect(result).toEqual(scenario.product.one);
  });

  scenario('creates a product', async scenario => {
    const result = await createProduct({
      input: {
        name: 'String',
        countryId: scenario.product.two.countryId,
        typeId: scenario.product.two.typeId,
      },
    });

    expect(result.name).toEqual('String');
    expect(result.countryId).toEqual(scenario.product.two.countryId);
    expect(result.typeId).toEqual(scenario.product.two.typeId);
  });

  scenario('updates a product', async scenario => {
    const original = await product({ id: scenario.product.one.id });
    const result = await updateProduct({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a product', async scenario => {
    const original = await deleteProduct({ id: scenario.product.one.id });
    const result = await product({ id: original.id });

    expect(result).toEqual(null);
  });
});
