/* eslint-disable import/extensions */
import {
  allSelection, sortOrder, searchByName,
  // import/extensions eslint-disable-next-line import/named
// eslint-disable-next-line import/named
} from '../src/data.js';

const champions = {
  AurelionSol: {
    version: '6.24.1',
    id: 'AurelionSol',
    key: '136',
    name: 'Aurelion Sol',
    title: 'The Star Forger',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg',
    blurb:
      'Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his ...',
    info: {
      attack: 2,
      defense: 3,
      magic: 8,
      difficulty: 7,
    },
    image: {
      full: 'AurelionSol.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 384,
      y: 0,
      w: 48,
      h: 48,
    },
    tags: ['Mage', 'Fighter'],
    partype: 'MP',
    stats: {
      hp: 550,
      hpperlevel: 80,
      mp: 350,
      mpperlevel: 50,
      movespeed: 325,
      armor: 19,
      armorperlevel: 3.6,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.5,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57,
      attackdamageperlevel: 3.2,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.36,
    },
  },
  Ahri: {
    version: '6.24.1',
    id: 'Ahri',
    key: '103',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb:
      'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5,
    },
    image: {
      full: 'Ahri.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 48,
      y: 0,
      w: 48,
      h: 48,
    },
    tags: ['Mage', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2,
    },
  },
  Alistar: {
    version: '6.24.1',
    id: 'Alistar',
    key: '12',
    name: 'Alistar',
    title: 'the Minotaur',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg',
    blurb:
      "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of ...",
    info: {
      attack: 6,
      defense: 9,
      magic: 5,
      difficulty: 7,
    },
    image: {
      full: 'Alistar.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 144,
      y: 0,
      w: 48,
      h: 48,
    },
    tags: ['Tank', 'Support'],
    partype: 'MP',
    stats: {
      hp: 613.36,
      hpperlevel: 106,
      mp: 278.84,
      mpperlevel: 38,
      movespeed: 330,
      armor: 24.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.675,
      hpregenperlevel: 0.85,
      mpregen: 8.5,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61.1116,
      attackdamageperlevel: 3.62,
      attackspeedoffset: 0,
      attackspeedperlevel: 2.125,
    },
  },
  Vayne: {
    version: '6.24.1',
    id: 'Vayne',
    key: '67',
    name: 'Vayne',
    title: 'the Night Hunter',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Vayne.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg',
    blurb:
      'The world is not always as civilized as people might think. There are still those who would follow the blackest paths of magic and become corrupted by the darker powers that flow through Runeterra. Shauna Vayne knows this fact well.<br><br>As a young ...',
    info: {
      attack: 10,
      defense: 1,
      magic: 1,
      difficulty: 8,
    },
    image: {
      full: 'Vayne.png',
      sprite: 'champion3.png',
      group: 'champion',
      x: 192,
      y: 96,
      w: 48,
      h: 48,
    },
    tags: ['Marksman', 'Assassin'],
    partype: 'MP',
    stats: {
      hp: 498.44,
      hpperlevel: 83,
      mp: 231.8,
      mpperlevel: 35,
      movespeed: 330,
      armor: 19.012,
      armorperlevel: 3.4,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 5.42,
      hpregenperlevel: 0.55,
      mpregen: 6.97,
      mpregenperlevel: 0.4,
      crit: 0,
      critperlevel: 0,
      attackdamage: 55.88,
      attackdamageperlevel: 1.66,
      attackspeedoffset: -0.05,
      attackspeedperlevel: 4,
    },
  },
};

const dataLol = Object.values(champions);

describe('allSelection', () => {
  it('debería ser una función', () => {
    expect(typeof allSelection).toBe('function');
  });

  it('debería retornar rol Mago', () => {
    const filterRol = allSelection(champions, 'Mage');
    expect(filterRol).toHaveLength(2);
  });
  it('debería retornar rol Tank', () => {
    const filterRol = allSelection(champions, 'Tank');
    expect(filterRol).toHaveLength(1);
  });
  it('debería retornar rol Fighter', () => {
    const filterRol = allSelection(champions, 'Fighter');
    expect(filterRol).toHaveLength(1);
  });
  it('debería retornar rol Support', () => {
    const filterRol = allSelection(champions, 'Support');
    expect(filterRol).toHaveLength(1);
  });
  it('debería retornar rol Marksman', () => {
    const filterRol = allSelection(champions, 'Marksman');
    expect(filterRol).toHaveLength(1);
  });
  it('debería retornar rol Assassin', () => {
    const filterRol = allSelection(champions, 'Assassin');
    expect(filterRol).toHaveLength(2);
  });
  /* it('debería retornar habilidad popular', () => {
    const filterRol = allSelection(champions, 'attack');
    expect(filterRol).toHaveLength(33);
  }); */
});

describe('sortOrder', () => {
  it('is a function', () => {
    expect(typeof sortOrder).toBe('function');
  });

  it('debería retornar un array de objetos ordenados de a-z', () => {
    expect(sortOrder(dataLol, 'a-z')).toEqual(dataLol);
  });

  it('debería retornar un array de objetos ordenados de z-a', () => {
    expect(sortOrder(dataLol, 'z-a').reverse()).toEqual(dataLol.reverse());
  });
});

describe('searchByName', () => {
  it('debería ser una función', () => {
    expect(typeof searchByName).toBe('function');
  });
  it('debería retornar Aatrox para búsqueda : "Ahri" ', () => {
    const search = searchByName(dataLol, 'ahri');
    expect(search).toHaveLength(1);
  });
  it('debería retornar varios campeones para búsqueda : "a" ', () => {
    const search = searchByName(dataLol, 'a');
    expect(search).toHaveLength(3);
  });
  it('debería retornar (nada) para " + "(cualquier caracter', () => {
    const search = searchByName(dataLol, '+');
    expect(search).toHaveLength(0);
  });
});
