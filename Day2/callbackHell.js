addNum(10, function(addRes, err) {
    if(!err) {
        subNum(addRes, function(subRes, err) {
            if(!err) {
                mulNum(subRes, function(mulRes, err) {
                    if(!err) {
                        divNum(mulRes, function(divRes, err) {
                            if(!err) {
                                squrNum(divRes, function(squrRes, err) {
                                    if(!err) {
                                        cubeNum(squrRes, function(cubeRes, err) {
                                            console.log(`Final Result ${cubeRes}`);
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});


function addNum(value, cb) {
    cb(value + 10, false);
}

function subNum(value, cb) {
    cb(value - 2, false);
}

function mulNum(value, cb) {
    cb(value * 4, false);
}

function divNum(value, cb) {
    let val = ~~(value / 2);
    cb(val, false);
}

function squrNum(value, cb) {
    cb(value * value, false);
}

function cubeNum(value, cb) {
    cb(value * value * value, false);
}
