function getNum (y) {
    return function getSum (n) {
        console.log(n + y)
    }
}

const x = getNum(4)

x(2)