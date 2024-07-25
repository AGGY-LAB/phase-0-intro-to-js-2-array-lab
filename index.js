// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName){

    cats.push(catName);
    return cats

}
console.log(destructivelyAppendCat("Ralph"))

function destructivelyPrependCat(catName){


    cats.unshift(catName);
    return cats

    }
console.log(destructivelyPrependCat("Bob"))


function destructivelyRemoveLastCat(){


    cats.pop()
    return cats

    }
console.log(destructivelyRemoveLastCat())


function  destructivelyRemoveFirstCat(){


    cats.shift()
    return cats

    }
console.log( destructivelyRemoveFirstCat())



function appendCat(catName){
    let cats1=[...cats];
    cats1.push(catName)
    return cats1
}

function prependCat(catName){
    let cats1=[...cats];
    cats1.unshift(catName)
    return cats1
}

function removeLastCat(catName){
    let cats1=[...cats];
    cats1.pop(catName)
    return cats1
}

function removeFirstCat(catName){
    let cats1=[...cats];
    cats1.shift(catName)
    return cats1
}