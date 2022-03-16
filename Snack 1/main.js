let numero = parseInt(prompt("Inserisci un numero: "));

if (numero % 2 == 0) {
    document.getElementById("container").innerHTML = `Il numero è pari: ${numero}`;
} else {
    numero += 1;
    document.getElementById("container").innerHTML = `Il numero è dispari, il successivo è: ${numero}`;
}