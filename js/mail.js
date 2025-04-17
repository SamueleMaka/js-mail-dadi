// ========== MAIL ========== 
const sysMails = ["luca@gmail.com", "maria@gmail.com", "giovanni@gmail.com", "anna@gmail.com", "marco@gmail.com", "chiara@gmail.com", "andrea@gmail.com", "francesca@gmail.com", "alessandro@gmail.com", "giulia@gmail.com", "simone@gmail.com", "valentina@gmail.com", "davide@gmail.com", "elisa@gmail.com", "matteo@gmail.com", "federica@gmail.com", "stefano@gmail.com", "ilaria@gmail.com", "lorenzo@gmail.com", "martina@gmail.com"];

let input = prompt("Inserisci la tua email");
let found = false; 
for(let i=0; i<sysMails.length; i++){
    if(input === sysMails[i]){
        found = true; 
        break;
    }
}
if(found){
    console.log(`La tua email ${input} è stata trovata all'interno del sistema`)
}else{
    console.log(`La tua email ${input} non è stata trovata all'interno del sistema`)
}

