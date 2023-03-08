function color01(){
  var der01 = document.getElementById("der");
  der01.style.backgroundColor = "#6bb3b3";
}
function color02(){
  var der02 = document.getElementById("der");
  der02.style.backgroundColor = "#9999ff";
}
function color03(){
  var der03 = document.getElementById("der");
  der03.style.backgroundColor = "#ff9cb1";
}
function color04(){
  var der04 = document.getElementById("der");
  der04.style.backgroundColor = "#e9ca19";
}
/*-----------------------------------*/
function cambiarImagen(src) {
  var img= document.getElementById("imagen");
  img.src = src;
}
/*-----------------------------------*/
var textMover = document.getElementById("mensaje");
function arriba(){
    textMover.style.top = (textMover.offsetTop - 10) + "px";
}
function abajo(){
    textMover.style.top = (textMover.offsetTop + 10) + "px";
}
function izquierda(){
    textMover.style.left = (textMover.offsetLeft - 10) + "px";
}
function derecha(){
    textMover.style.left = (textMover.offsetLeft + 10) + "px";
}

/*-----------------------------------*/

function openModal() {
    var modal = document.getElementById("ventana");
    modal.style.display = "block";
  }
  
function closeModal() {
  var modal = document.getElementById("ventana");
  modal.style.display = "none";
}

function guardar() {
  var mensaje03 = document.getElementById("mensaje02").value;
  var nombre03 = document.getElementById("nombre02").value;
  document.getElementById("nombre").innerHTML = nombre03;
  document.getElementById("mensaje").innerHTML = mensaje03;
  closeModal();
}
/*-----------------------------------*/
function cambiarTipo(tipo) {
  var elemento = document.getElementById("mensaje");
  elemento.className = tipo;
}

/*-----------------------------------*/
const texto = document.getElementById('mensaje');
const btnC01 = document.getElementById('color01');
const btnC02 = document.getElementById('color02');
const btnC03 = document.getElementById('color03');
const btnC04 = document.getElementById('color04');
/*-----------------------------------*/
btnC01.addEventListener('click', function() {
  texto.style.color = '#425fd1';
});

btnC02.addEventListener('click', function() {
  texto.style.color = '#aa00ff';
});

btnC03.addEventListener('click', function() {
  texto.style.color = '#ff0072';
});
btnC04.addEventListener('click', function() {
  texto.style.color = '#7addc3';
});
/*-----------------------------------*/
const btnGrande = document.querySelector('#aumentar');
const btnChico = document.querySelector('#disminuir');
const textoSize = document.querySelector('#mensaje');

btnGrande.addEventListener('click', function() {
  let fontSize = parseInt(window.getComputedStyle(mensaje).fontSize);
  if (fontSize < 100) { /* límite superior del tamaño de fuente */
    fontSize += 2; /* aumentar tamaño de fuente */
    mensaje.style.fontSize = fontSize + 'px';
  }
});

btnChico.addEventListener('click', function() {
  let fontSize = parseInt(window.getComputedStyle(mensaje).fontSize);
  if (fontSize > 10) { /* límite inferior del tamaño de fuente */
    fontSize -= 2; /* disminuir tamaño de fuente */
    mensaje.style.fontSize = fontSize + 'px';
  }
});