//array= objeto que nos va a servir pra guardar una coleccion de informacion

let beers = [ "erdinger", "corona", "delirium"];
let wines = ["chardoonay", "merlot", "cabernet"];
//inmutable
//concat=concatenar 2 arrays
const alcoholicDrinks = beers.concat(wines);
alcoholicDrinks.push("rioja");
//mutable=modifica su estado y modifica la variable
// beers.push("heineken");
// //push=agrega un elemento al final
// beers.unshift("modelo especial");
// //unshift=agrega en el primer lugar
// beers.splice(2, 0, "fullers");
// //splice= recorre elementos
// let b = beers.pop();
// let b2= beers.shift();
// console.log(b);
// console.log(b2);
//pop=elimina y retorna el elemento ultimo
//shift=elimina el primer elemento
showDom("array1", beers);
showDom("array2", alcoholicDrinks);

function show (arr){
    for(let i=0 ; i<arr.length; i++){
        console.log(arr[i]);
    }   
}
function showDom(element, arr){
    document.getElementById(element).innerHTML ="";

    for(let i=0 ; i<arr.length; i++){
        document.getElementById(element).innerHTML +=
        `<div>${arr[i]}<div>`;
    }
}


