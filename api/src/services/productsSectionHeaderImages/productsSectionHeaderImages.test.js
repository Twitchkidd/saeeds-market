import {
  productsSectionHeaderImages,
  productsSectionHeaderImage,
  createProductsSectionHeaderImage,
  updateProductsSectionHeaderImage,
  deleteProductsSectionHeaderImage,
} from './productsSectionHeaderImages';

describe('productsSectionHeaderImages', () => {
  scenario('returns all productsSectionHeaderImages', async scenario => {
    const result = await productsSectionHeaderImages();

    expect(result.length).toEqual(
      Object.keys(scenario.productsSectionHeaderImage).length
    );
  });

  scenario('returns a single productsSectionHeaderImage', async scenario => {
    const result = await productsSectionHeaderImage({
      id: scenario.productsSectionHeaderImage.one.id,
    });

    expect(result).toEqual(scenario.productsSectionHeaderImage.one);
  });

  scenario('creates a productsSectionHeaderImage', async () => {
    const result = await createProductsSectionHeaderImage({
      input: { url: 'String', description: 'String' },
    });

    expect(result.url).toEqual('String');
    expect(result.description).toEqual('String');
  });

  scenario('updates a productsSectionHeaderImage', async scenario => {
    const original = await productsSectionHeaderImage({
      id: scenario.productsSectionHeaderImage.one.id,
    });

    const result = await updateProductsSectionHeaderImage({
      id: original.id,
      input: { url: 'String2' },
    });

    expect(result.url).toEqual('String2');
  });

  scenario('deletes a productsSectionHeaderImage', async scenario => {
    const original = await deleteProductsSectionHeaderImage({
      id: scenario.productsSectionHeaderImage.one.id,
    });

    const result = await productsSectionHeaderImage({ id: original.id });

    expect(result).toEqual(null);
  });
});
