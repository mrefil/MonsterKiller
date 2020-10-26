const ATTACK_VALUE = 10;
const M_ATTACk_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth =  chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHendler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const pDamage = dealPlayerDamage(M_ATTACk_VALUE);
    currentPlayerHealth -= pDamage;
    
    if (currentMonsterHealth <=0 && currentPlayerHealth > 0) {
        alert("You win!");
    } else if (currentPlayerHealth <=0 && currentMonsterHealth >0) {
        alert("You lost!");
    } else if (currentMonsterHealth <=0 && currentPlayerHealth <= 0) {
        alert("Draw");
    }
}

attackBtn.addEventListener('click', attackHendler);