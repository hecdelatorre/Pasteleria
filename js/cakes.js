(() => {
  'use strict';

  const createCake = (limit) => {
    let cakes = [];
    for(let i = 0; i <= limit; i++) cakes.push(`Cake-${i}`);
    return _.shuffle(cakes);
  };

  const createCard = (cardName) => {
    const divContainerCards = document.querySelector('#divContainerCards');
    const divCol = document.createElement('div');
    divCol.classList.add('col');
    divContainerCards.append(divCol);

    const divCard = document.createElement('div')
    divCard.classList.add('card');
    divCol.append(divCard);

    const imgCard = document.createElement('img');
    imgCard.src = 'assets/img/Cakes/Cake-11.png';
    imgCard.src = `assets/img/Cakes/${cardName}.png`;
    imgCard.alt = cardName;
    imgCard.classList.add('card-img-top');
    imgCard.classList.add('mb-3');
    divCard.append(imgCard);
  
    const button = document.createElement('button');
    button.type = 'button';
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.innerText = 'Comprar';
    divCard.append(button);
  };

  const cakes = createCake(25);

  const placeCards = (cakes) => {
    for(let cake of cakes) createCard(cake);
  };
  
  placeCards(cakes);
})();
