//Funcion1 verificar
function verificar(){
    let encontrado = false;
    for(let i = 0; i < secretos.length; i++){
        if(parseInt(input.value) === secretos[i]){
            alert("¡Usted acerto!");
            encontrado = true;
            break;
        }
    }
    
    if(encontrado === false){
        alert("¡Usted erró!");
    }
    
    input.value = "";//Número digitado en el input desaparese automaticamente
    input.focus();//Para que el cursor aparesca automaticamente en la casilla de input
}

//Funcion 2 aleatoiro, genera un número aleatorio
function aleatorio(){
    return Math.round(Math.random()*10);//Para agregar números aleatorios
}

//Funcion 3 sortarNumeros
function sortearNumeros(cantidad){
    let secretos = [];
    let contador = 1;

    while(contador <= cantidad){
        let numeroAleatorio = aleatorio();
        console.log(numeroAleatorio);//Se puede borrar
        let encontrado = false;

        if(numeroAleatorio !== 0){
            for(let i = 0; i < secretos.length; i++){
                if(numeroAleatorio === secretos[i]){
                    encontrado = true;
                    break;
                }
            }
            if(encontrado === false){
                secretos.push(numeroAleatorio);
                contador++;
            }
        }
        
    }
    return secretos
}

let secretos = sortearNumeros(4);
console.log(secretos);//Se puede borrar

/*A través de document.querySelector() podemos ir hasta el mundo HTML y llevar el elemento al mundo JavaScript para que podamos manipularlo.
document.querySelector() recibe un parámetro del nombre de las etiquetas que queremos buscar del mundo HTML. Es más poderoso de lo que piensas y acepta recibir otros tipos de parámetros, pero para nuestra capacitación, entender que si pasamos el nombre de una etiqueta HTML nos devolverá la etiqueta en el mundo JavaScript es suficiente.
*/
let input = document.querySelector("input");
input.focus();//Para que cuando inicie el programa el cursor se posiscion en la casilla input

let button = document.querySelector("button");//Llamada al button de HTML a JavaScript
button.onclick = verificar;//Con onclick cuando el usuario a click en el boton llama a la funcion verificar
