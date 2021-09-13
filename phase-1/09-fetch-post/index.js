const pokeContainer = document.getElementById("poke-container");
const pokeForm = document.getElementById("poke-form");

const commentForm = document.getElementById('comments-form')
const commentContainer = document.getElementById('#collection-comments')

//GET - retrieve resources
//post -create a new resource
 //put/patch - update an existing resource
 //delete -  zaps resource, nothing is deleted from the internet

 //making a fetch request

const BASE_URL = "http://localhost:3000/pokemons"
const COMMENT_URL = "http://localhost:3000/comments"
//fetch(BASE_URL)
//what is a promise?  an IOU
//.then(resp => resp.json()) //why a .then?  
//.then(data => console.log(data))

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
  };
  

  //the url we are sending the data to
  const configObj = {
    method: "POST", //overwriting the default get request made by fetch
    headers: {
      'Accept': 'application/json',  //optional/not needed in this day and age
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(pokemon)

  }
 
   //the url we are sending the data to
   fetch(BASE_URL, configObj)
   .then(function(resp){
     return resp.json()
   })
   .then(function(pokemon){
    renderPokemon(pokemon);
    //do something with the data
  })
    pokeForm.reset();
}

function increaseLikes(pokemon, likesNum) {
  ++pokemon.likes;
  likesNum.textContent = pokemon.likes;
}

function deletePoke(card) {
  card.remove();
}
function getPokemons() {
  fetch("http://localhost:3000/pokemons") // returns a promise
    .then(function (response) {
      return response.json();
    })
    .then(function (pokemonsArray) {
      pokemonsArray.forEach(function (pokemon) {
        renderPokemon(pokemon);
      });
    });
}

function createComment(event){
  event.preventDefault()
  const commentContext = document.querySelector('#comment-input')
  // event.target.comment-input

  const comment = {
    content: commentContext.value
    // content : document.querySelector('#comment-input').value
  }

  const configObj = {
    method: "POST", 
    headers: {
      'Accept': 'application/json',  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }
  fetch(COMMENT_URL, configObj)
  .then(function(resp){
    return resp.json()
  })
  .then(function(comment){
   console.log(comment)
   //do something with the data
 })
}

// 

function init() {
  getPokemons()
  pokeForm.addEventListener("submit", createPokemon)
  commentForm.addEventListener('submit', createComment)
}

init();
