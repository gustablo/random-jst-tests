function* ild() {
    for (let a = 1; a < 1e9* 1e9; a++) {
        yield a;
    }
}

async function fn () {
    for await (const y of ild()) {
        console.log(y);
    }
}

fn();