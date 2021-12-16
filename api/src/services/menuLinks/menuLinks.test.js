import {
  menuLinks,
  menuLink,
  createMenuLink,
  updateMenuLink,
  deleteMenuLink,
} from './menuLinks';

describe('menuLinks', () => {
  scenario('returns all menuLinks', async (scenario) => {
    const result = await menuLinks();

    expect(result.length).toEqual(Object.keys(scenario.menuLink).length);
  });

  scenario('returns a single menuLink', async (scenario) => {
    const result = await menuLink({ id: scenario.menuLink.one.id });

    expect(result).toEqual(scenario.menuLink.one);
  });

  scenario('creates a menuLink', async () => {
    const result = await createMenuLink({
      input: { name: 'String', text: 'String', url: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.text).toEqual('String');
    expect(result.url).toEqual('String');
  });

  scenario('updates a menuLink', async (scenario) => {
    const original = await menuLink({ id: scenario.menuLink.one.id });
    const result = await updateMenuLink({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a menuLink', async (scenario) => {
    const original = await deleteMenuLink({ id: scenario.menuLink.one.id });
    const result = await menuLink({ id: original.id });

    expect(result).toEqual(null);
  });
});
