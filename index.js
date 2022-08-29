import ancientsData from "./data/ancients";
import blueCardsData from "./data/mythicCards/blue";
import greenCardsData from "./data/mythicCards/green";
import brownCardsData from "./data/mythicCards/brown";

let _blueCardsData, _greenCardsData, _brownCardsData;
let stateStage = {
  'stage first': {
    blue: 0,
    green: 0,
    brown: 0
  },
  'stage second': {
    blue: 0,
    green: 0,
    brown: 0
  },
  'stage third': {
    blue: 0,
    green: 0,
    brown: 0
  }
};
const blockAnc = document.querySelector(".f__anc"),
  blockLvl = document.querySelector(".f__lvl");

function selectedAnc() {
  const arrayAnc = blockAnc.querySelectorAll(".anc");
  arrayAnc.forEach((anc) => {
    if (this != anc) anc.classList.remove("selected");
  });
  this.classList.toggle("selected");

  const arrayLvl = blockLvl.querySelectorAll(".button");
  arrayLvl.forEach((lvl) => {
    if (this != lvl) lvl.classList.remove("selected");
  });

  const cards = document.querySelector(".cards__all");
  //cards.innerHTML = '';
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
}

function generatorCards() {
  let target;
  const arrayAnc = blockAnc.querySelectorAll(".anc");
  arrayAnc.forEach((anc) => {
    if (anc.classList.contains("selected")) {
      target = anc;
      return;
    }
  });
  const cards = document.querySelector(".cards__all");
  //cards.innerHTML = '';
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
  const firstStage = document.createElement("div");
  const secondStage = document.createElement("div");
  const thirdStage = document.createElement("div");
  switch (target.className) {
    case "anc anc__az selected":
      firstStage.classList.add("stage");
      firstStage.classList.add("first");
      createCards(firstStage, ancientsData[0].firstStage.greenCards, "green");
      createCards(firstStage, ancientsData[0].firstStage.blueCards, "blue");
      createCards(firstStage, ancientsData[0].firstStage.brownCards, "brown");
      cards.appendChild(firstStage);

      secondStage.classList.add("stage");
      secondStage.classList.add("second");
      createCards(secondStage, ancientsData[0].secondStage.greenCards, "green");
      createCards(secondStage, ancientsData[0].secondStage.blueCards, "blue");
      createCards(secondStage, ancientsData[0].secondStage.brownCards, "brown");
      cards.appendChild(secondStage);

      thirdStage.classList.add("stage");
      thirdStage.classList.add("third");
      createCards(thirdStage, ancientsData[0].thirdStage.greenCards, "green");
      createCards(thirdStage, ancientsData[0].thirdStage.blueCards, "blue");
      createCards(thirdStage, ancientsData[0].thirdStage.brownCards, "brown");
      cards.appendChild(thirdStage);
      break;
    case "anc anc__ct selected":
      firstStage.classList.add("stage");
      firstStage.classList.add("first");
      createCards(firstStage, ancientsData[1].firstStage.greenCards, "green");
      createCards(firstStage, ancientsData[1].firstStage.blueCards, "blue");
      createCards(firstStage, ancientsData[1].firstStage.brownCards, "brown");
      cards.appendChild(firstStage);

      secondStage.classList.add("stage");
      secondStage.classList.add("second");
      createCards(secondStage, ancientsData[1].secondStage.greenCards, "green");
      createCards(secondStage, ancientsData[1].secondStage.blueCards, "blue");
      createCards(secondStage, ancientsData[1].secondStage.brownCards, "brown");
      cards.appendChild(secondStage);

      thirdStage.classList.add("stage");
      thirdStage.classList.add("third");
      createCards(thirdStage, ancientsData[1].thirdStage.greenCards, "green");
      createCards(thirdStage, ancientsData[1].thirdStage.blueCards, "blue");
      createCards(thirdStage, ancientsData[1].thirdStage.brownCards, "brown");
      cards.appendChild(thirdStage);
      break;
    case "anc anc__io selected":
      firstStage.classList.add("stage");
      firstStage.classList.add("first");
      createCards(firstStage, ancientsData[2].firstStage.greenCards, "green");
      createCards(firstStage, ancientsData[2].firstStage.blueCards, "blue");
      createCards(firstStage, ancientsData[2].firstStage.brownCards, "brown");
      cards.appendChild(firstStage);

      secondStage.classList.add("stage");
      secondStage.classList.add("second");
      createCards(secondStage, ancientsData[2].secondStage.greenCards, "green");
      createCards(secondStage, ancientsData[2].secondStage.blueCards, "blue");
      createCards(secondStage, ancientsData[2].secondStage.brownCards, "brown");
      cards.appendChild(secondStage);

      thirdStage.classList.add("stage");
      thirdStage.classList.add("third");
      createCards(thirdStage, ancientsData[2].thirdStage.greenCards, "green");
      createCards(thirdStage, ancientsData[2].thirdStage.blueCards, "blue");
      createCards(thirdStage, ancientsData[2].thirdStage.brownCards, "brown");
      cards.appendChild(thirdStage);
      break;
    case "anc anc__sh selected":
      firstStage.classList.add("stage");
      firstStage.classList.add("first");
      createCards(firstStage, ancientsData[3].firstStage.greenCards, "green");
      createCards(firstStage, ancientsData[3].firstStage.blueCards, "blue");
      createCards(firstStage, ancientsData[3].firstStage.brownCards, "brown");
      cards.appendChild(firstStage);

      secondStage.classList.add("stage");
      secondStage.classList.add("second");
      createCards(secondStage, ancientsData[3].secondStage.greenCards, "green");
      createCards(secondStage, ancientsData[3].secondStage.blueCards, "blue");
      createCards(secondStage, ancientsData[3].secondStage.brownCards, "brown");
      cards.appendChild(secondStage);

      thirdStage.classList.add("stage");
      thirdStage.classList.add("third");
      createCards(thirdStage, ancientsData[3].thirdStage.greenCards, "green");
      createCards(thirdStage, ancientsData[3].thirdStage.blueCards, "blue");
      createCards(thirdStage, ancientsData[3].thirdStage.brownCards, "brown");
      cards.appendChild(thirdStage);
      break;

    default:
      break;
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function createCards(divStage, count, typeCard) {
  switch (typeCard) {
    case "blue":
      while (count > 0) {
        if (_blueCardsData.length > 0) {
          const card = document.createElement("div");
          let index = getRandomIntInclusive(0, _blueCardsData.length - 1);
          card.classList.add("card");
          card.classList.add(typeCard);
          card.style.backgroundImage = `url('${_blueCardsData[index].cardFace}')`;
          _blueCardsData.splice(index, 1);
          divStage.appendChild(card);
          stateStage[divStage.className].blue++;
        }
        if ((_blueCardsData.length === 0) && (count>0)) {
          _blueCardsData = blueCardsData.filter((o) => o.difficulty==='normal');  
          count--;        
        }
        else 
          count--;
      }
      break;
    case "green":
      while (count > 0) {
        if (_greenCardsData.length > 0) {
          const card = document.createElement("div");
          let index = getRandomIntInclusive(0, _greenCardsData.length - 1);
          card.classList.add("card");
          card.classList.add(typeCard);
          card.style.backgroundImage = `url('${_greenCardsData[index].cardFace}')`;
          _greenCardsData.splice(index, 1);
          divStage.appendChild(card);
          stateStage[divStage.className].green++;
        }
        if ((_greenCardsData.length === 0) && (count>0)) {      
          _greenCardsData = greenCardsData.filter((o) => o.difficulty==='normal');     
          count--;     
        }
        else 
        count--;
      }
      break;
    case "brown":
      while (count > 0) {
        if (_brownCardsData.length > 0) {
          const card = document.createElement("div");
          let index = getRandomIntInclusive(0, _brownCardsData.length - 1);
          card.classList.add("card");
          card.classList.add(typeCard);
          card.style.backgroundImage = `url('${_brownCardsData[index].cardFace}')`;
          _brownCardsData.splice(index, 1);
          divStage.appendChild(card);
          stateStage[divStage.className].brown++;
        }
        if ((_brownCardsData.length === 0) && (count>0)) {          
          _brownCardsData = brownCardsData.filter((o) => o.difficulty==='normal');
          count--;
        }
        else 
        count--;
      }
      break;
    default:
      break;
  }
}

function selectedLvl() {
  const arrayLvl = blockLvl.querySelectorAll(".button");
  arrayLvl.forEach((lvl) => {
    if (this != lvl) lvl.classList.remove("selected");
  });
  this.classList.toggle("selected");
  // (_blueCardsData = blueCardsData.map((o) => ({ ...o }))),
  //   (_greenCardsData = greenCardsData.map((o) => ({ ...o }))),
  //   (_brownCardsData = brownCardsData.map((o) => ({ ...o })));
  switch (this.className) {
    case "button lvl__very__easy selected":
      _blueCardsData = blueCardsData.filter((o) => o.difficulty==='easy');
      _greenCardsData = greenCardsData.filter((o) => o.difficulty==='easy');
      _brownCardsData = brownCardsData.filter((o) => o.difficulty==='easy');
      break;
    case "button lvl__easy selected":
      _blueCardsData = blueCardsData.filter((o) => o.difficulty!='hard');
      _greenCardsData = greenCardsData.filter((o) => o.difficulty!='hard');
      _brownCardsData = brownCardsData.filter((o) => o.difficulty!='hard');
      break;
    case "button lvl__normal selected":
      (_blueCardsData = blueCardsData.map((o) => ({ ...o }))),
      (_greenCardsData = greenCardsData.map((o) => ({ ...o }))),
      (_brownCardsData = brownCardsData.map((o) => ({ ...o })));
      break;
    case "button lvl__high selected":
      _blueCardsData = blueCardsData.filter((o) => o.difficulty!='easy');
      _greenCardsData = greenCardsData.filter((o) => o.difficulty!='easy');
      _brownCardsData = brownCardsData.filter((o) => o.difficulty!='easy');
      break;
    case "button lvl__hard selected":
      _blueCardsData = blueCardsData.filter((o) => o.difficulty==='hard');
      _greenCardsData = greenCardsData.filter((o) => o.difficulty==='hard');
      _brownCardsData = brownCardsData.filter((o) => o.difficulty==='hard');
      break;
    default:
      break;
  }
  if (this.classList.contains('selected')) {
    stateStage = {
      'stage first': {
        blue: 0,
        green: 0,
        brown: 0
      },
      'stage second': {
        blue: 0,
        green: 0,
        brown: 0
      },
      'stage third': {
        blue: 0,
        green: 0,
        brown: 0
      }
    };
    generatorCards();
  }
  const state = document.querySelector(".state__count");
  state.textContent = '';
    for (const key in stateStage) {      
        const element = stateStage[key];
        state.textContent += key + ': ';
        for (const key in element) {         
          state.textContent += key + '-' + element[key] + ' ';
        }
        state.textContent += '  '
    }  
  
}

function initEvent() {
  const arrayAnc = blockAnc.querySelectorAll(".anc");
  arrayAnc.forEach((anc) => {
    anc.addEventListener("click", selectedAnc);
  });
  const arrayLvl = blockLvl.querySelectorAll(".button");
  arrayLvl.forEach((lvl) => {
    lvl.addEventListener("click", selectedLvl);
  });
}

initEvent();
