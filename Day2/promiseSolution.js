var ps = new Promise(function (resolve, reject) {
    resolve(10);
})

ps.then(addNum).then(subNum).then(mulNum).then(divNum).then(squrNum).then(cubeNum).then((result) => {
    console.log(`Final Result ${result}`);
}).catch((err) => {
    console.log(err);
});

function addNum(value) {
    return value + 10
}

function subNum(value) {
    return value - 2;
}

function mulNum(value) {
    return value * 4;
}

function divNum(value) {
    let val = ~~(value / 2);
    return val;
}

function squrNum(value) {
    return value * value;
}

function cubeNum(value) {
    return value * value * value;
}