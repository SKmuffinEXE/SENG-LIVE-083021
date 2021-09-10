const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },
];

let idValue = 1
const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");


function renderPokemon(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";

  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;

  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;

  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = "Likes: ";

  const likesNum = document.createElement("h5");
  likesNum.className = "like-num";
  likesNum.textContent = pokemon.likes;

  const likeBttn = document.createElement("button");
  likeBttn.className = "like-bttn";
  likeBttn.textContent = "♥";
  likeBttn.addEventListener("click", () => increaseLikes(pokemon, likesNum))

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click",() => deletePokemon(pokeCard))

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
  idValue++
}

function createPokemon(event){
  event.preventDefault()
  // debugger;
  
//grab the values of name and image
//create a new pokemon object with those values
//Render the new character onto the DOM
const name = event.target.querySelector(`#name-input`).value
const img = event.target.querySelector(`#img-input`).value

const pokemon = {
  name: name,
  img: img,
  likes: 0,
  id: idValue
}

renderPokemon(pokemon)

pokeForm.reset()
}

function increaseLikes(pokemon, likesNum){
  pokemon.likes++
  // console.log(pokemon)
  likesNum.textContent = pokemon.likes
}

function deletePokemon(pokemon){
//removes the pokemon div and lowers the idvalue for when new pokemon are interested
pokemon.remove()
idValue--
console.log(idValue)
}

function init() {
  pokemons.forEach(function (pokemon) {
    renderPokemon(pokemon);
  });

  pokeForm.addEventListener('submit',createPokemon)

  //personal tests


}

init()

