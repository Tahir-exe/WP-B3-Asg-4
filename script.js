function generateTable(number, length) {
    for (let i = 1; i <= length; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

generateTable(2, 20);
