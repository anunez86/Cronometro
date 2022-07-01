// let ciudad=["Lima","Arequipa","Trujillo"]
// console.log(ciudad);
// ciudad[1]="Lambayeque";
// document.write(ciudad+"<br>");
// document.write(ciudad.length+"<br>");

// document.write(ciudad[2]+"<br>");

//ciudad.push("Cusco","Puno");
//document.write(ciudad.push());

//ciudad.pop();
//document.write(ciudad.pop()+"<br>");

//ciudad.unshift("Ica");
//document.write(ciudad+"<br>");

//ciudad.shift();



// let numeros=[];

// // numeros[0]=8;
// // numeros[1]=2;
// // numeros[2]=45;
// // numeros[3]=1;
// // numeros[4]=9;
// let num=prompt("ingrese numero de array: ")
// // for(valor_inicial;valor_final;incremento)
// for(let i=0;i<num;i++){
//     numeros[i]=prompt("ingreso numero");
// }

// document.write(numeros+"<br>");
// //Funciones de comparación
// const fc=function(a,b){
//     return a-b;
// }



// numeros.sort(fc);
// document.write(numeros);





function cargarEjemplo(){
    document.getElementById("numerosEjem").value="6,99,56,15,68";
}

function reiniciar(){
    location.reload();
}

function calcular(){
    let valores_array=document.getElementById("numerosEjem").value.split(/,/)
    let mayor= -Infinity;
    let menor= +Infinity;
    let suma=0;
    let promediar=0;
//SUMAR
    for(let i=0;i<valores_array.length;i++){
        suma=parseInt(valores_array[i])+suma;
    }

//OBTENER EL MAYOR
    for(let i=0;i<valores_array.length;i++){
        if(parseInt(valores_array[i])>mayor) mayor=valores_array[i];

}
//OBTENER EL MENOR

for(let i=0;i<valores_array.length;i++){
    if(parseInt(valores_array[i])<menor) menor=valores_array[i];

}



    document.getElementById("resultado").innerHTML="La suma es: "+suma+"<br>"+"El numero mayor es: "+mayor+"<br>"+"El numero menor es: "+menor;
}

//====================================================================
setInterval(muestraFrase,2000)

let frases=["Solo sé, que nada sé","El que sigue la consigue", "dime con quien andas y te diré quien eres","el que estudia triunfa"];
let indice=0;
function muestraFrase(){
    indice++;
    if(indice>=frases.length){
        indice=0;
    }
    document.getElementById("frases").innerHTML=frases[indice];
}


//===================================

let colores=[];

function agregaColor(evt){
    evt.preventDefault(); //detenie el actualizado de una pagina
    
    let nom=document.getElementById("colores").value;


    if(nom==""){
        alert("El campo no puede estar vacio");
    }else if(!existeNombre(nom)){
        let opcion ="<li>"+nom+"</li>";
        let lista=document.getElementById("listac");

        lista.innerHTML+=opcion;
        colores.push(nom);
    }else{
        alert("El color existe");
    }

}
function existeNombre(nombre){
    //busca nombre
    
    for(let i=0;i<colores.length;i++){
        const elemento=colores[i];
        if(elemento.trim().toLowerCase()===nombre.trim().toLowerCase()){
            return true;
        }
    }
    return false;
 }


// Cronometro JavaScript

var hoursLabel = document.getElementById("horas");
var minutesLabel = document.getElementById("minutos");
var secondsLabel = document.getElementById("segundos");
var start = document.getElementById("iniciar");
var stop = document.getElementById("detener");

var totalSeconds = 0;

var myInterval;


start.addEventListener("click", startFun);
stop.addEventListener("click", stopFun);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  hoursLabel.innerHTML = pad(parseInt(totalSeconds/3600));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function startFun() {
  myInterval = setInterval(setTime, 1000);
}

function stopFun(){
    clearInterval(myInterval);
}


// FECHA Y HORA

let semana = [`lunes, martes, miercoles, jueves, viernes, sabado, domingo`];
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

setInterval(function(){
  const date = new Date()
  hora.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
  fecha.innerHTML = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`		
},1000);