import {
  newItems,
  newItem,
  createNewItem,
  updateNewItem,
  deleteNewItem,
} from './newItems';

describe('newItems', () => {
  scenario('returns all newItems', async scenario => {
    const result = await newItems();

    expect(result.length).toEqual(Object.keys(scenario.newItem).length);
  });

  scenario('returns a single newItem', async scenario => {
    const result = await newItem({ id: scenario.newItem.one.id });

    expect(result).toEqual(scenario.newItem.one);
  });

  scenario('creates a newItem', async () => {
    const result = await createNewItem({
      input: { title: 'String', description: 'String', imageUrl: 'String' },
    });

    expect(result.title).toEqual('String');
    expect(result.description).toEqual('String');
    expect(result.imageUrl).toEqual('String');
  });

  scenario('updates a newItem', async scenario => {
    const original = await newItem({ id: scenario.newItem.one.id });
    const result = await updateNewItem({
      id: original.id,
      input: { title: 'String2' },
    });

    expect(result.title).toEqual('String2');
  });

  scenario('deletes a newItem', async scenario => {
    const original = await deleteNewItem({ id: scenario.newItem.one.id });
    const result = await newItem({ id: original.id });

    expect(result).toEqual(null);
  });
});
