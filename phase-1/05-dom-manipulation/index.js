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

const labe = document.getElementsByClassName('form-label')

//accepts class name as the argument, returns elements as an HTML collection, which you can convert to an array using Array.from()

//const goalsDiv = doccument.querySelector('#lecture-goals')

//accepts different selectors whether it's IDs, class and returns the first value that matches the provided selector

const allDivs = document.querySelectorAll('div')

//returns a collection of elements that match the selector.  .forEach can be used on this collection, returns a node list


const pokeContainer = document.querySelector('#poke-container')

//creating elements

pokemons.forEach(function(pokemon){
  renderPokemon(pokemon)
  // console.log(pokemon)

})

//shorter syntax
//pokemons.forEach(renderPokemon)

function renderPokemon(character){
  //create elements that display our characters properties to the DOM

  //create a div
  const pokeCard = document.createElement('div')
  pokeCard.id = `poke-${character.id}`
  pokeCard.className = "poke-card"

  console.log(pokeCard)

  const pokeImg = document.createElement('img')
  pokeImg.src = character.img
  pokeImg.alt = `${character.name}`

  const pokeName = document.createElement('h3')
  pokeName.innerText = `${character.name}`

  const lkButton = document.createElement('button')
  lkButton.class = "like-bttn"
  lkButton.innerText = "♥"
  

  //adding pokeCard to pokeContainer
  pokeCard.append(pokeName)
  pokeCard.append(pokeImg)
  pokeCard.append(`Pokedex Entry # ${character.id}`)
  pokeCard.append(`        `)
  pokeCard.append(lkButton)
  // pokeCard.append(app)
  pokeContainer.appendChild(pokeCard)

}


//ways to add new elements to existing element
//.appendChild - takes in 1 argument, and it MUST be a node.
//.append - take in multiple arguments, and they don't have to nodes.

// document.createElement()  // this is the most recommended, creates nodes
//.innerHTML  //creates strings that represent the element


//----

//Updating elements

//select the elements we want to change and set it equal to its new value

const header = document.querySelector('#header')
header.innerHTML = `<img id="header-img"
src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
/>`

//Remove elements from our DOM

//.remove() called on the targeted element

const lectureGoals =document.querySelector('#lecture-goals')
lectureGoals.remove()