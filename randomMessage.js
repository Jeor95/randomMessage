const randomNumber  = (num) => {
    return Math.floor(Math.random() * num);
}

const monsters = ['Goblin', 'Cyclope', 'Dragon', 'Skeleton', 'Undead'];
const hunters = ['Jinwoo', 'Chae', 'Sasuke', 'Goku'];
const huntersRank = ['S', 'A', 'B', 'C', 'D', 'E'];

const hunting = () => {
    const monster = monsters[randomNumber(monsters.length)];
    const hunter = hunters[randomNumber(hunters.length)];
    const hunterRank = huntersRank[randomNumber(huntersRank.length)];

    if (hunterRank === 'S') {
        console.log(`The ${hunter} hunter rank is ${hunterRank} and easily can beat everything, including that ${monster}`);
    }
    else if (hunterRank === 'A' && monster === 'Dragon') {
        console.log(`The ${hunter} hunter rank is ${hunterRank} and still can't beat that ${monster} because is too strong`);
    }
    else if (hunterRank === 'B' && (monster === 'Dragon' || monster === 'Cyclope')) {
        console.log(`The ${hunter} hunter rank is ${hunterRank} and is too weak to beat a ${monster}`);
    }
    else if ((hunterRank === 'C' || hunterRank === 'D') && (monster === 'Dragon' || monster === 'Cyclope' || monster === 'Undead')) {
        console.log(`The ${hunter} hunter rank is ${hunterRank} and is too weak to beat a ${monster}`);
    }
    else if (hunterRank === 'E') {
        console.log(`The ${hunter} hunter rank is ${hunterRank} and is too weak that instantly die in the battle with a ${monster}`);
    }
    else {
        console.log(`The ${hunter} hunter rank is ${hunterRank} and after a few minutes on fight, could defeat a ${monster}`);
    }
}
hunting();

module.exports = randomNumber;
