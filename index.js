
const cats = ["Milo" , "Otis" , "Garfield"]

cats.length 

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph) 
    return cats
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
    return cats
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat() {
        cats.shift()
        return cats
}

function appendCat() {
const copyOfCats = [...cats, "Broom"]
    return copyOfCats;
}

function prependCat() {
const copyOfCats = ["Arnold", ...cats]
    return copyOfCats;
}

function removeLastCat() {
const cats = ["Milo", "Otis", "Garfield"];
cats.splice(-1);
return cats;
}


function removeFirstCat() {
const cats = ["Milo", "Otis", "Garfield"];
cats.splice(0, 1);
return cats;
}
