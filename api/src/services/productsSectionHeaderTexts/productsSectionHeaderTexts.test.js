import {
  productsSectionHeaderTexts,
  productsSectionHeaderText,
  createProductsSectionHeaderText,
  updateProductsSectionHeaderText,
  deleteProductsSectionHeaderText,
} from './productsSectionHeaderTexts';

describe('productsSectionHeaderTexts', () => {
  scenario('returns all productsSectionHeaderTexts', async scenario => {
    const result = await productsSectionHeaderTexts();

    expect(result.length).toEqual(
      Object.keys(scenario.productsSectionHeaderText).length
    );
  });

  scenario('returns a single productsSectionHeaderText', async scenario => {
    const result = await productsSectionHeaderText({
      id: scenario.productsSectionHeaderText.one.id,
    });

    expect(result).toEqual(scenario.productsSectionHeaderText.one);
  });

  scenario('creates a productsSectionHeaderText', async () => {
    const result = await createProductsSectionHeaderText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a productsSectionHeaderText', async scenario => {
    const original = await productsSectionHeaderText({
      id: scenario.productsSectionHeaderText.one.id,
    });

    const result = await updateProductsSectionHeaderText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a productsSectionHeaderText', async scenario => {
    const original = await deleteProductsSectionHeaderText({
      id: scenario.productsSectionHeaderText.one.id,
    });

    const result = await productsSectionHeaderText({ id: original.id });

    expect(result).toEqual(null);
  });
});
