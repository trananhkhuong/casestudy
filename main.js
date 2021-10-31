let canvas = document.getElementById('game');
let context = canvas.getContext('2d');
let scoreShow = document.getElementById('score');
    let birdImg = new Image();
    let background = new Image();
    let tobeOn = new Image();
    let tobeBelow = new Image();

    birdImg.src = "img/zyro2.png"
    background.src = "img/ra1.png";
    tobeOn.src = "img/tuveOn.png";
    tobeBelow.src = "img/tubeBelow.png";

    let score = 0;
    let distanceOf2Tubes = 200;
    let distanceToTheLowerTube;
    let bird = {
        x: background.width / 5,
        y: background.height / 2
    }

    let sword = [];
    sword[0] = {
        x: canvas.width,
        y: 0
    }

    function run() {
        // load hình ảnh vào
        context.drawImage(background, 0, 0);
        context.drawImage(birdImg, bird.x, bird.y);

        for (let  i = 0; i < sword.length; i++) {
            distanceToTheLowerTube = tobeOn.height + distanceOf2Tubes;
            context.drawImage(tobeOn, sword[i].x, sword[i].y);
            context.drawImage(tobeBelow, sword[i].x, sword[i].y + distanceToTheLowerTube);
            sword[i].x -= 5;//để ống di chuyển

            if (sword[i].x === canvas.width / 2) {
                sword.push({
                    x: canvas.width,
                    y: Math.floor(Math.random() * tobeOn.height) - tobeOn.height
                })
            }
            if (sword[i].x === 0) sword.splice(0, 0);

            if (sword[i].x === bird.x) {

            score++;}

            if (bird.y + birdImg.height === canvas.height ||
                bird.x + birdImg.width >= sword[i].x && bird.x <= sword[i].x + tobeOn.width
                && (bird.y <= sword[i].y + tobeOn.height ||
                    bird.y + birdImg.height >= sword[i].y + distanceToTheLowerTube)
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
let value = document.getElementById('start').value;
    value = document.getElementById('input').innerHTML;


    function check(){
    let a = document.write(score)
    if (a === true){
        location.reload()

    }else {
       document.getElementById('reset').innerHTML ="<button type='button' id='reset' onclick='reset()'>reset</button>"
    }
}
