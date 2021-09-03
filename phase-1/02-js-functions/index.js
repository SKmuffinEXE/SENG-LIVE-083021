

// function init() {

//     console.log("page has loaded, run the program");
//     return "this is a return value";
// }

//const testingFunction = init()
//console.log(testingFunction)

// const createPokemon = function() {
//     let pokemon = prompt('which pokemon are you today?')
//     return pokemon;
// }

// console.log(createPokemon())

//arow function

// const renderPokemon = () => {

// }

// function renderPokemon(character){
// console.log(`Rendering ${character}`)
// }

// renderPokemon("Agumon");
// renderPokemon("Numemon");
// renderPokemon("Patamon");

function sayName(name){
    return `Hi, I'm ${name}`
}

function callbackFun() {
    return "I am a callback function"
}

function greeting(callback){
    return callback("Aysan")
}

let pokemon = "pikachu"

function renderPokemon(character){
    let pokemon = character;
    console.log(pokemon);
    console.log(`Rendering ${character}`)
}

console.log(pokemon);

//closures

function createPokemon(){
    let pokemon = "Horsea"
    return function printPokemon(){
        console.log(`The pokemon is ${pokemon}`)
    }
}