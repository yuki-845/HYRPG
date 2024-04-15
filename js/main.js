var canvas = document.getElementById('myCanvas');
canvas.width = window.screen.width;
canvas.height = window.screen.height


var ctx = canvas.getContext('2d');
        
var isDrawing = false; // クリックしている間はtrueに設定されます。


// マウスクリックイベントをリッスン
canvas.addEventListener('mousedown', function(event) {
    isDrawing = true;
});

// マウスがCanvas上から離れたら、クリックしていないとして処理します。
canvas.addEventListener('mouseup', function(event) {
    isDrawing = false;
});

// マウスがCanvas上を移動するときにイベントをリッスンします。
canvas.addEventListener('mousemove', function(event) {
    if (isDrawing) { // クリックされている場合のみ座標を表示します。
        var rect = canvas.getBoundingClientRect(); // Canvas要素の位置とサイズを取得
        var x = event.clientX - rect.left; // マウスの現在位置のx座標を計算
        var y = event.clientY - rect.top; // マウスの現在位置のy座標を計算
        console.log('Mouse moved to (' + x + ', ' + y + ')');
    }
});

ctx.rect(10, 10, 100, 100);
ctx.fill();
