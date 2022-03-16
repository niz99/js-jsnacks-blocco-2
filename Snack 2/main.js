const listaNomi = ["Martina", "Cristian", "Valeria", "Giorgia", "Nizar"];
const listaCognomi = ["Carminati", "Bogni", "Scotti", "Aiolfi", "Fergag"];

for(i = 0; i < 5; i++) {
    let nomeScelto = listaNomi[Math.floor(Math.random() * 5)];
    let cognomeScelto = listaCognomi[Math.floor(Math.random() * 5)];
    
    document.getElementById("container").innerHTML = `<h1>${nomeScelto} ${cognomeScelto}</h1>`;
}
