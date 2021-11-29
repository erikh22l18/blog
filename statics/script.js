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

// funciones para manipular el canvas
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
  ctx.stroke()
}


// dibujar un circulo
var x = 200
var y = 100
var r = 50
var color = 'red'
drawCircle(x, y, r, color)


