import {
  primaryCallToActionTexts,
  primaryCallToActionText,
  createPrimaryCallToActionText,
  updatePrimaryCallToActionText,
  deletePrimaryCallToActionText,
} from './primaryCallToActionTexts';

describe('primaryCallToActionTexts', () => {
  scenario('returns all primaryCallToActionTexts', async scenario => {
    const result = await primaryCallToActionTexts();

    expect(result.length).toEqual(
      Object.keys(scenario.primaryCallToActionText).length
    );
  });

  scenario('returns a single primaryCallToActionText', async scenario => {
    const result = await primaryCallToActionText({
      id: scenario.primaryCallToActionText.one.id,
    });

    expect(result).toEqual(scenario.primaryCallToActionText.one);
  });

  scenario('creates a primaryCallToActionText', async () => {
    const result = await createPrimaryCallToActionText({
      input: { text: 'String' },
    });

    expect(result.text).toEqual('String');
  });

  scenario('updates a primaryCallToActionText', async scenario => {
    const original = await primaryCallToActionText({
      id: scenario.primaryCallToActionText.one.id,
    });

    const result = await updatePrimaryCallToActionText({
      id: original.id,
      input: { text: 'String2' },
    });

    expect(result.text).toEqual('String2');
  });

  scenario('deletes a primaryCallToActionText', async scenario => {
    const original = await deletePrimaryCallToActionText({
      id: scenario.primaryCallToActionText.one.id,
    });

    const result = await primaryCallToActionText({ id: original.id });

    expect(result).toEqual(null);
  });
});
