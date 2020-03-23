/* interacción con el DOM event listeners o event handlers, se usan las que estàn en data.js */
import {
  allSelection, orderAZ,
} from './data.js';
import lol from './data/lol/lol.js';

const allChampionList = lol.data;

const divContador = document.getElementById('contador');
const buttonAllChampions = document.getElementById('button_colection');

buttonAllChampions.addEventListener('click', () => {
  const list = document.querySelector('#root');
  list.innerHTML = ''; /* Primero lo vacía luego coloca todo a todos los campeones */
  // eslint-disable-next-line no-unused-vars
  const seeAllChampion = Object.values(allChampionList).forEach((champion) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.className = 'nameOfChampion';
    img.className = 'imageOfChampion';
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
    divContador.innerHTML = 'Todos los campeones 122';
  });
});

const liRoles = document.querySelectorAll('.Roles');
liRoles.forEach((option) => {
  option.addEventListener('click', () => {
    const typeRol = option.getAttribute('data-value');
    const functionFilterRol = allSelection(allChampionList, typeRol);
    const list = document.querySelector('#root');
    list.innerHTML = '';
    Object.values(functionFilterRol).forEach((champion) => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const p2 = document.createElement('p');
      p.className = 'nameOfChampion';
      p2.className = 'tagsOfChampion';
      img.className = 'imageOfChampion';
      p.innerHTML = `${champion.name}`;
      p2.innerHTML = `${champion.tags}`;
      img.src = `${champion.splash}`;
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(p2);
      list.appendChild(div);
    });
    divContador.innerHTML = (`${typeRol} ${functionFilterRol.length}`);
  });
});

document.getElementById('AtoZ').addEventListener('click', () => {
  const list = document.querySelector('#root');
  list.innerHTML = '';
  const seeAllChampion = Object.values(allChampionList).forEach((champion) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    p.className = 'nameOfChampion';
    img.className = 'imageOfChampion';
    p.innerHTML = `${champion.name}`;
    img.src = `${champion.splash}`;
    div.appendChild(img);
    div.appendChild(p);
    list.appendChild(div);
    divContador.innerHTML = 'Todos los campeones 122';
  });
  return seeAllChampion(orderAZ(allChampionList));
});
