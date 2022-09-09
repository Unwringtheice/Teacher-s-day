function inner() {

    var box = document.getElementsByClassName('photo')[0];
    if (box) {


        function init() {
            var width = box.offsetWidth;
            var count = parseInt(width / 1920 * 1280);
            for (var i = 0; i < count; i++) {
                var size = parseInt(ran(200, 120) / 10);
                var ele = document.createElement('div');
                ele.classList.add('item');
                ele.style.width = size + 'px';
                ele.style.height = size + 'px';
                ele.style.left = ran(0, 95) + '%';
                ele.style.top = ran(20, 80) + '%';
                ele.style.animationDelay = ran(0, 30) / 10 + 's';
                box.appendChild(ele);
            }
        }

        function ran(min, max) {
            min = parseInt(min);
            max = parseInt(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        init();


        setInterval(function() {
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w1').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w2').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w3').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w4').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w5').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w6').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w7').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w8').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w9').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w10').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w11').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w12').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w13').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w14').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w15').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w16').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w17').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w18').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w19').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w20').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w21').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w22').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w23').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w24').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w25').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w26').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w27').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w28').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w29').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w30').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w31').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w32').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w33').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w34').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w35').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w36').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w37').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w38').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w39').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w40').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w41').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w42').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w43').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w44').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w45').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w46').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w47').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w48').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
            document.getElementById('w49').style = `top:${top1}px;left:${left1}px;color:rgb(${c1},${c2},${c3});`
            var top1 = Math.floor(Math.random() * 801 + 0);
            var left1 = Math.floor(Math.random() * 1801 + 0);
            var c1 = Math.floor(Math.random() * 255 + 1);
            var c2 = Math.floor(Math.random() * 255 + 1);
            var c3 = Math.floor(Math.random() * 255 + 1);
        }, 2000)

    }
}
// var usename = ['wjy', 'hyj', 'sjb']
var use_name = document.getElementById('use')
var btn = document.getElementById('btn');
//  var body = document.getElementsByTagName('body')[0]
//  console.log(body)
btn.onclick = function() {
    switch (use_name.value) {
        case '李红育':
            zxb();
            break;
        default:
            alert('输错了哦，必须输入您的姓名才可以进入哦！ ');
    }
    inner()
}

function zxb() {
    document.body.innerHTML = `<div class="photo">
                                    
                                </div>
                                <div class="heart"></div>
                                <embed src="../radio/儿歌 - 虫儿飞.mp3" width=50px height=50px type=audio/mpeg loop="true" autostart="true" ></embed>
                                <div class='w' id="w1">师傅你真帅</div>
                                <div class='w' id="w2">师傅高大威猛</div>
                                <div class='w' id="w3">师傅越来越帅</div>
                                <div class='w' id="w4">师傅教师节快乐</div>
                                <div class='w' id="w5">师傅玉树临风</div>
                                <div class='w' id="w6">祝师傅身体健康</div>
                                <div class='w' id="w7">师傅天天开心</div>
                                <div class='w' id="w8">师傅一天比一天帅</div>
                                <div class='w' id="w9">师傅你是贝程最帅</div>
                                <div class='w' id="w10">师傅英俊潇洒</div>
                                <div class='w' id="w11">师傅你真帅</div>
                                <div class='w' id="w12">师傅你最帅</div>
                                <div class='w' id="w13">师傅越来越帅</div>
                                <div class='w' id="w14">师傅教师节快乐</div>
                                <div class='w' id="w15">师傅越活越年轻</div>
                                <div class='w' id="w16">师傅风流倜傥</div>
                                <div class='w' id="w17">师傅天天开心</div>
                                <div class='w' id="w18">师傅一天比一天帅</div>
                                <div class='w' id="w19"></div>
                                <div class='w' id="w20">师傅教师节快乐</div>
                                <div class='w' id="w21">祝师傅幸福每一天</div>
                                <div class='w' id="w22">师傅风度翩翩</div>
                                <div class='w' id="w23">师傅你真帅</div>
                                <div class='w' id="w24">师傅你是世界上最棒的人</div>
                                <div class='w' id="w25">师傅越来越帅</div>
                                <div class='w' id="w26">师傅教师节快乐</div>
                                <div class='w' id="w27">师傅越活越年轻</div>
                                <div class='w' id="w28">祝师傅身体健康</div>
                                <div class='w' id="w29">师傅天天开心</div>
                                <div class='w' id="w30">师傅一天比一天帅</div>
                                <div class='w' id="w31">师傅器宇轩昂</div>
                                <div class='w' id="w32">师傅教师节快乐</div>
                                <div class='w' id="w33">师傅你真帅</div>
                                <div class='w' id="w34">师傅英明神武</div>
                                <div class='w' id="w35">师傅越来越帅</div>
                                <div class='w' id="w36">师傅教师节快乐</div>
                                <div class='w' id="w37">师傅越活越年轻</div>
                                <div class='w' id="w38">祝师傅身体健康</div>
                                <div class='w' id="w39">师傅风流倜傥</div>
                                <div class='w' id="w40">师傅一天比一天帅</div>
                                <div class='w' id="w41">师傅你是贝程最帅</div>
                                <div class='w' id="w42">师傅教师节快乐</div>
                                <div class='w' id="w43">祝师傅幸福每一天</div>
                                <div class='w' id="w44">师傅玉树临风</div>
                                <div class='w' id="w45">师傅你最帅</div>
                                <div class='w' id="w46">师傅越来越帅</div>
                                <div class='w' id="w47">师傅教师节快乐</div>
                                <div class='w' id="w48">师傅越活越年轻</div>
                                <div class='w' id="w49">祝师傅身体健康</div>
                                <div class='w' id="w50">师傅越来越帅</div>`
}