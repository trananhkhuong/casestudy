let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let scoreShow = document.getElementById('score');
    let birdImg = new Image();
    let background = new Image();
    let tobeOn = new Image();
    let tobeBelow = new Image();

    birdImg.src = "zyro2.png"
    background.src = "ra1.png";
    tobeOn.src = "tuveOn.png";
    tobeBelow.src = "tubeBelow.png";
    let score = 0;
    let distanceOf2Tubes = 200;
    let distanceToTheLowerTube;
    let bird = {
        x: background.width / 5,
        y: background.height / 2
    }
    let ong = [];
    ong[0] = {
        x: canvas.width,
        y: 0
    }
    function run() {
        // load hình ảnh vào
        context.drawImage(background, 0, 0);
        context.drawImage(birdImg, bird.x, bird.y);

        for (let  i = 0; i < ong.length; i++) {
            distanceToTheLowerTube = tobeOn.height + distanceOf2Tubes;
            context.drawImage(tobeOn, ong[i].x, ong[i].y);
            context.drawImage(tobeBelow, ong[i].x, ong[i].y + distanceToTheLowerTube);
            ong[i].x -= 5;//để ống di chuyển

            if (ong[i].x == canvas.width / 2) {
                ong.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * tobeOn.height) - tobeOn.height
                })
            }
            if (ong[i].x == 0) ong.splice(0, 0);

            if (ong[i].x == bird.x) {

            score++;}

            if (bird.y + birdImg.height == canvas.height ||
                bird.x + birdImg.width >= ong[i].x && bird.x <= ong[i].x + tobeOn.width
                && (bird.y <= ong[i].y + tobeOn.height ||
                    bird.y + birdImg.height >= ong[i].y + distanceToTheLowerTube)
            ) {
                check()
            return
            }
        }
        scoreShow.innerHTML = "score: " + score;

        bird.y += 3;
        requestAnimationFrame(run)
    }

    document.addEventListener("mousedown",function () {

        bird.y -= 80;
    })
let value= document.getElementById('start').value;
    value=document.getElementById('input').innerHTML

function check(){
    let a = alert('Điểm của bạn là : '+score+ " điểm ")
    if (a == true){
        location.reload()

    }else {
       document.getElementById('reset').innerHTML ="<button type='button' id='reset' onclick='reset()'>reset</button>"
    }
}
function reset(){
    location.reload()
}