const pokemons = ['Pikachu', 'Bulbasaur', 'Jigglypuff']

console.log(pokemons)
pokemons[pokemons.length-1]

//calls the last element of the array.

pokemons.push("Spearow") //adds an element to the end of an array, destructive

pokemons.unshift("Arbok") //adds an element to the beginning of an array, destructive

// let newPokemons = [...pokemons, "Megaman"]  //the spread operator.  creates a copy of the original array, non destructive

//removal

//.pop will remove and return the last item of an array Destructive

let lastElement = pokemons.pop()
// console.log(lastElement)

//.shift removes the 1st element and returns it.  Destructive

let firstElement = pokemons.shift()

//.slice non destructive return a portion of the array, or a complete copy

//pass by value vs pass by reference
//primitives types are pass by values
//non primitives are pass by ref

//pass by value

let x = 2

function square(num){
    return num = num * num
}

let result = square(x)

// console.log(result)

// pass by ref : any changes made to a reference of the data will be relfected in the original state

// const copyPokemons = pokemons
// copyPokemons.pop()
// console.log(copyPokemons)
// console.log(pokemons)
// console.log(copyPokemons === pokemons)


// const copyPokemons =[...pokemons]
// copyPokemons.pop()
// console.log(copyPokemons)
// console.log(pokemons)
// console.log(copyPokemons === pokemons)



//looping

//forEach() step inside the array and deal with each element individually as it loops through the array


//function delclaraton
// pokemons.forEach(function(character) {
//     console.log(character)
// })

//arrow syntax
// pokemons.forEach((character => {console.log(character)}))



//.map

let newPokemons = pokemons.map(function(character){
    console.log(character.toLowerCase())
})

console.log(newPokemons)
console.log(pokemons)
console.log(pokemons === newPokemons)

//.map is NOT destructive, returns a new copy!