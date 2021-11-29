var title = document.getElementById('title')

// cambiar el titulo cada 5 segundos
var i = 1;
setInterval(function(){
  i++
  title.innerHTML = 'Hola mundo ' + i;
}, 10000) // 5000 milisegundos = 5 segundos

//cambiar el background cada 5 segundos
var j = 5;

setInterval(function(){
  j++
  document.body.style.background = 'rgb(' + j * Math.random(25) + ',' + j * Math.random(25) + ',' + j  * Math.random(25) + ')';
}, 10000) // 5000 milisegundos = 5 segundos

// crear un lienzo de dibujo
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

/* funciones para manipular el canvas dibujando figuras 
ciculos triangulos cuadrados*/

function drawCircle(x, y, r, color){
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine(x1, y1, x2, y2, color){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  //cambiar el grosor de linea
  ctx.lineWidth = 5
  ctx.stroke()
}
function drawTriangle(x1, y1, x2, y2, x3, y3, color){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineTo(x3, y3)
  ctx.fillStyle = color
  ctx.fill()
}

function drawSquare(x, y, l, color){
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + l, y)
  ctx.lineTo(x + l, y + l)
  ctx.lineTo(x, y + l)
  ctx.lineTo(x, y)
  ctx.fillStyle = color
  ctx.fill()
}

// dibujar un circulo
var x = 200
var y = 100
var r = 50
var color = 'red'
drawCircle(x, y, r, color)

// dibujar un cuadrado
var x = 100
var y = 100
var l = 100
var color = 'yellow'
drawSquare(x, y, l, color)

// dibujar una linea
var x1 = 100
var y1 = 100
var x2 = 300
var y2 = 300
var color = 'blue'
drawLine(x1, y1, x2, y2, color)

// dibujar un triangulo
var x1 = 100
var y1 = 100
var x2 = 300
var y2 = 300
var x3 = 200
var y3 = 400
var color = 'green'
drawTriangle(x1, y1, x2, y2, x3, y3, color)

