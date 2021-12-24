import {
  heroImages,
  heroImage,
  createHeroImage,
  updateHeroImage,
  deleteHeroImage,
} from './heroImages';

describe('heroImages', () => {
  scenario('returns all heroImages', async scenario => {
    const result = await heroImages();

    expect(result.length).toEqual(Object.keys(scenario.heroImage).length);
  });

  scenario('returns a single heroImage', async scenario => {
    const result = await heroImage({ id: scenario.heroImage.one.id });

    expect(result).toEqual(scenario.heroImage.one);
  });

  scenario('creates a heroImage', async () => {
    const result = await createHeroImage({
      input: { title: 'String', url: 'String' },
    });

    expect(result.title).toEqual('String');
    expect(result.url).toEqual('String');
  });

  scenario('updates a heroImage', async scenario => {
    const original = await heroImage({ id: scenario.heroImage.one.id });
    const result = await updateHeroImage({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a heroImage', async scenario => {
    const original = await deleteHeroImage({ id: scenario.heroImage.one.id });
    const result = await heroImage({ id: original.id });

    expect(result).toEqual(null);
  });
});
