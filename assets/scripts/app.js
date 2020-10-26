const ATTACK_VALUE = 10;
const M_ATTACk_VALUE = 10;
const STRONG_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth =  chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);


function attackMonster(mode) {
    let maxDamage;
    
    if (mode = 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode = 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const pDamage = dealPlayerDamage(M_ATTACk_VALUE);
    currentPlayerHealth -= pDamage;
    
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You win!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost!");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw");
    }

}

function attackHendler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHendler);
strongAttackBtn.addEventListener('click', strongAttackHandler);