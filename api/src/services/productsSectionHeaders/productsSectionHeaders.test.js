import {
  productsSectionHeaders,
  productsSectionHeader,
  createProductsSectionHeader,
  updateProductsSectionHeader,
  deleteProductsSectionHeader,
} from './productsSectionHeaders';

describe('productsSectionHeaders', () => {
  scenario('returns all productsSectionHeaders', async scenario => {
    const result = await productsSectionHeaders();

    expect(result.length).toEqual(
      Object.keys(scenario.productsSectionHeader).length
    );
  });

  scenario('returns a single productsSectionHeader', async scenario => {
    const result = await productsSectionHeader({
      id: scenario.productsSectionHeader.one.id,
    });

    expect(result).toEqual(scenario.productsSectionHeader.one);
  });

  scenario('creates a productsSectionHeader', async () => {
    const result = await createProductsSectionHeader({
      input: { text: 'String', imageUrls: 'String' },
    });

    expect(result.text).toEqual('String');
    expect(result.imageUrls).toEqual('String');
  });

  scenario('updates a productsSectionHeader', async scenario => {
    const original = await productsSectionHeader({
      id: scenario.productsSectionHeader.one.id,
    });

    const result = await updateProductsSectionHeader({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a productsSectionHeader', async scenario => {
    const original = await deleteProductsSectionHeader({
      id: scenario.productsSectionHeader.one.id,
    });

    const result = await productsSectionHeader({ id: original.id });

    expect(result).toEqual(null);
  });
});
