score = 0;
cross = true;

audio = new Audio('music.mp3')
audiogo = new Audio('gameover.mp3')
setTimeout(() => {
    audio.play();
}, 1000);

document.addEventListener("keydown", function (e) {
    console.log("key code is ", e.key)
    if (e.key == 's') {
        jerry = document.querySelector('.jerry');
        jerry.classList.add('animateJerry');
        setTimeout(() => {
            jerry.classList.remove('animateJerry')
        }, 700);
    }

    if (e.key == 'd') {
        jerry = document.querySelector('.jerry');
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = jerryX + 112 + "px";
    }

    if (e.key == 'a') {
        jerry = document.querySelector('.jerry');
        jerryX = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
        jerry.style.left = (jerryX - 112) + "px";
    }

})

setInterval(() => {
    jerry = document.querySelector('.jerry');
    gameover = document.querySelector('.gameover');
    tom = document.querySelector('.tom');

    dx = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(jerry, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(tom, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(tom, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX,offsetY);
    if (offsetX < 93 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        tom.classList.remove('tomAni');
        jerry.classList.remove('animateJerry');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(tom, null).getPropertyValue('animation-duration'));
            newdur = anidur + 0.1;
            tom.style.animationDuration = newdur + 's';
        }, 1000);

    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}

