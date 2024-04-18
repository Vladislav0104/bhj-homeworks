const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let counterDead = 0;
let counterLost = 0;
function getHole(index) {
	return document.getElementById("hole" + index);
}
for (let holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
            if(counterLost === 5) {
                alert ('Проигрыш!');
                counterLost = 0;
                lost.textContent = counterLost;
                counterDead = 0;
                dead.textContent = counterDead;
            }
        }
 
        if (counterDead === 10) {
            alert ('Победа!');
            counterDead = 0;
            dead.textContent = counterDead;
            counterLost = 0;
            lost.textContent = counterLost;
        }
    };
}