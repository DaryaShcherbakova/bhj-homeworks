let lost = document.getElementById ('lost');
let dead = document.getElementById ('dead');

function getHole (index) {
    return document.getElementById ( `hole${index}`);
}

for (let i = 1; i <= 9; i += 1) {
    let hole = getHole(i);

hole.onclick = function () {
    if (hole.className.includes('hole_has-mole') == true) {
        dead.textContent ++;
    }
    else {
        lost.textContent ++;
    }

    if (dead.textContent == 10) {
        alert ("вы победили!");
        lost.textContent = 0;
        dead.textContent = 0;
    }
    if (lost.textContent == 5) {
        alert ("вы проиграли");
        lost.textContent = 0;
        dead.textContent = 0;
    }
  }
}