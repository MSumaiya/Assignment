
const readLine = require('readline');
readLine.emitKeypressEvents(process.stdin);

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
let date = new Date();
console.log('Namn: Mirza Sumaiya Alam, date:'+ date);

console.log('Instruktioner:');
console.log('Tryck Ctrl + c för att avsluta och Ctrl + r för att starta om \ n \ n')


const askQuestion = () => rl.question('Ange antalet tärningar du vill spela: ', (answer) => {
    const noOfDices = Number(answer);
    if (!Number.isSafeInteger(noOfDices) || noOfDices < 1 || noOfDices > 4) {
        console.error('Antal tärningar borde vara mellan 1 och 4\n');
        return askQuestion();
    }

    let res = 0;
    let remainingStrikes = noOfDices;
    let totalStrikesCount = 0;
    while (remainingStrikes) {
        const value = Math.ceil(Math.random() * 6);
        if (value !== 6) {
            res = res + value;
            console.log(`Dice value: ${value} and sum: ${res}`);
        } else {
            console.log(`Dice value: ${value} and sum: ${res}`);
            console.log('Lägger till två nya tärningar');
            remainingStrikes += 2;
        }
        totalStrikesCount += 1;
        remainingStrikes -= 1;  
    }

    console.log(`Total strikes: ${totalStrikesCount} and Total amount: ${res}\n\n`)
});

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'r') {
        console.log('Restarting...\n')
        askQuestion();
    }
    if (key.ctrl && key.name === 'c') {
        rl.close();
    }
})

askQuestion();