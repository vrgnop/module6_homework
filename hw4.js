let x = +prompt('Введите начальное значение') - 1
let y = +prompt('Введите конечное значение')
setInterval(() => {
    while (x < y) {
        x++
        console.log(x)
        break
    }
}, 2000)