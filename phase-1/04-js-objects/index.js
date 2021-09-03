//creating an object

const pikachu = {
    //key/value pairs.  Keys are properties
    name: 'Pikachu',
    img: 'www.img.com',
    likes: 0
}

pikachu['img'] = "www.google.com"

console.log(pikachu['name'])  //this is bracket notation

console.log(pikachu.img) //this is dot notation

//adding new properties

pikachu['color'] = "yellow"
pikachu.powers = "thunderbolt"

//removing properties

delete pikachu.powers

//best practice for modifying objects.

//spread operator!

newPikachu = {...pikachu}

// object.assign() works too!  Spread operator works better though

let copyOfPikachu = Object.assign({}, pikachu)



//looping through object

//for...in

console.log("-----")

function objLoops(obj){
    for (const k in obj)
    console.log(obj[k])
}


objLoops(pikachu)

//So if there was an array of objects and you wanted to get a specific key from an object of the object, how would I do that?

//when to use bracket vs dot notation

//dot notation is literal.
//can not be used with variables

//bracket notatio is more flexible because we can use variables with bracket notation

// function printName(object, property){

//     return object[property]  //if you replace bracket notation with dot notation, the return value will be undefined

// }

// console.log(printName(pikachu, 'name'))