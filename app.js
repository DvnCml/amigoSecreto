// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosGrupo = [];
let listaAmigos = document.getElementById("listaAmigos");
let numerosUsados = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigosGrupo.includes(amigo)|| amigo == ""){
        alert("el amigo ingresado ya existeo el campo esta vacio");
    }else{
        amigosGrupo.push(amigo);
        console.log(amigosGrupo);
        clearAmigo();
        añadirLista();
        
    }
}

//agrega amigos a la lista
function añadirLista(){
    for (let i = amigosGrupo.length - 1; i < amigosGrupo.length; i++) {
        let liAmigos = document.createElement("li"); // Crear elemento <li>
        liAmigos.textContent = amigosGrupo[i]; // Asignar el título al <li>
        listaAmigos.appendChild(liAmigos); // Agregar <li> al <ul>
    }
}

//limpiarcampo de texto
function clearAmigo(){
    document.getElementById('amigo').value = ("");
}

//sortear
function sortearAmigo(){
    let numeroGenerado =  Math.floor(Math.random()*amigosGrupo.length);
    console.log(numeroGenerado)
    if(numerosUsados.length == amigosGrupo.length){
        alert("se han sorteado todos los amigos");
    }
    if(amigosGrupo.length === 0){
        alert("no se puede sortear aun no hay nombres en la lista de amigos");
    }else if(numeroGenerado > amigosGrupo.length || numerosUsados.includes(numeroGenerado)){
        console.log(numerosUsados);
        return sortearAmigo();
    }else{
        resultado = document.getElementById('resultado');        
        resultado.innerHTML = amigosGrupo[numeroGenerado];
        numerosUsados.push(numeroGenerado);
    }
}