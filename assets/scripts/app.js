const ATTACK_VALUE = 10;
const M_ATTACk_VALUE = 10;
const STRONG_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth =  chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);


function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const pDamage = dealPlayerDamage(M_ATTACk_VALUE);
    currentPlayerHealth -= pDamage;
    
    if(currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('Bonus Life!');
    }
    
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You win!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost!");
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("Draw");
    }
}

function attackMonster(mode) {
    let maxDamage;
    
    if (mode = 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (mode = 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();

}

function attackHendler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentMonsterHealth = chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal because you have max health");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    endRound();
}

attackBtn.addEventListener('click', attackHendler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);