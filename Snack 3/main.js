let numeriInt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let somma = 0;

for(i = 0; i <= numeriInt.length; i++){
    if(numeriInt[i] % 2 == 1){
        somma += numeriInt[i];
        document.getElementById("container").innerHTML = `<h1>La somma dei numeri dispari è ${somma}`;
    }
}



