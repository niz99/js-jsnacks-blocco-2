let listaUno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let listaDue = [1, 2, 3, 4, 5, 6];
console.log(listaDue);

for(i = 0; listaUno.length != listaDue.length; i++) {
    listaDue.push( prompt("Inserisci un nuovo elemento: ") );
    console.log(listaDue);
}

document.getElementById("container").innerHTML = `<h1>Finalmente i due array hanno lo stesso numero di elementi</h1>`