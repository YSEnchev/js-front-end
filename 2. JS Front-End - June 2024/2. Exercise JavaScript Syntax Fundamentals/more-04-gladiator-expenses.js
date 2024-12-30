
function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;

    for (let index = 1; index <= lostFights; index++) {

        if (index % 2 === 0) {
            brokenHelmet++;
        }

        if (index % 3 === 0) {
            brokenSword++;
        }

        if (index % 2 === 0 && index % 3 === 0) {
            brokenShield++;

            if (brokenShield % 2 === 0) {
                brokenArmor++;
            }
        }
    }

    let expensesHelmet = helmetPrice * brokenHelmet;
    let expensesSword = swordPrice * brokenSword;
    let expensesShield = shieldPrice * brokenShield;
    let expensesArmor = armorPrice * brokenArmor;

    let totalExpenses = expensesHelmet + expensesSword + expensesShield + expensesArmor;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);