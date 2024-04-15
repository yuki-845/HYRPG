var canvas = document.createElement('canvas');
const deviceScreenWidth = screen.width;
const deviceScreenHeight = screen.height
canvas.width = deviceScreenWidth;
canvas.height = deviceScreenHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

// Canvas上に描画
ctx.fillStyle = 'rgb(200, 0, 0)'; // 赤色
ctx.fillRect(10, 10, 50, 50); // 四角形を描画
