import {
  allSelection, sortOrder,
// eslint-disable-next-line import/no-unresolved
} from '../src/data.js';

import lol from '../src/data/lol/lol.js';

const champions = lol.data;
const arr = Object.values(champions);

describe('allSelection', () => {
  it('debería ser una función', () => {
    expect(typeof allSelection).toBe('function');
  });

  it('debería retornar rol Mago', () => {
    const filterRol = allSelection(champions, 'Mage');
    expect(filterRol).toHaveLength(52);
  });
  it('debería retornar rol Tank', () => {
    const filterRol = allSelection(champions, 'Tank');
    expect(filterRol).toHaveLength(40);
  });
  it('debería retornar rol Fighter', () => {
    const filterRol = allSelection(champions, 'Fighter');
    expect(filterRol).toHaveLength(66);
  });
  it('debería retornar rol Apoyo', () => {
    const filterRol = allSelection(champions, 'Support');
    expect(filterRol).toHaveLength(27);
  });
  it('debería retornar rol Tirador', () => {
    const filterRol = allSelection(champions, 'Marksman');
    expect(filterRol).toHaveLength(24);
  });
  it('debería retornar rol Asesino', () => {
    const filterRol = allSelection(champions, 'Assassin');
    expect(filterRol).toHaveLength(33);
  });
});

describe('sortOrder', () => {
  it('is a function', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('debería retornar un array de objetos ordenados de a-z', () => {
    expect(sortOrder(arr, 'a-z')).toEqual(arr);
  });

  it('debería retornar un array de objetos ordenados de z-a', () => {
    expect(sortOrder(arr, 'z-a').reverse()).toEqual(arr.reverse());
  });
});
