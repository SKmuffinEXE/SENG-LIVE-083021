//how to use fetch
// fetch(endpoint, [options]***) //promises
// .then() //do something with the promise
// .then() //do something with the received data

//fetch by default is going to make a get request
//has 3 differetn statuses: pending, fulfilled, rejected

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
  likeBttn.addEventListener("click", () => increaseLikes(pokemon, likesNum));

  const deleteBttn = document.createElement("button");
  deleteBttn.className = "delete-bttn";
  deleteBttn.textContent = "Delete";
  deleteBttn.addEventListener("click", () => deletePoke(pokeCard));

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, likeBttn, deleteBttn);
  pokeContainer.appendChild(pokeCard);
}

function createPokemon(event) {
  event.preventDefault();
  const name = document.querySelector("#name-input").value;
  const img = event.target.querySelector("#img-input").value;

  const pokemon = {
    name: name,
    img: img,
    likes: 0,
    id: 6, // NEEDS TO CHANGE
  };
  renderPokemon(pokemon);
  pokeForm.reset();
}

function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
}

function deletePoke(card) {
  card.remove();
}

function getPokemons(){
//making a get request
  fetch('http://localhost:3000/pokemons')//returns a promise
  .then(function(resp){
    return resp.json()
  }) //return another rpomise)
  .then(function(pokemonsArray){
    //do something with pokemonsArray
    //specifc to your application design
    console.log(pokemonsArray)
    pokemonsArray.forEach(function(pokemon){
      renderPokemon(pokemon)
    })
  })
}

function init() {

  getPokemons()
  pokeForm.addEventListener("submit", createPokemon)
  
}

init();
