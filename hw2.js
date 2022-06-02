function getCharacterNum (number) {
    let sumDividers = 0
    if (number > 1000) {
        return 'Данные не верны'
    } else if (number != 0 && number != 1) {
        for (let i = 0; i < number; i++) {
            if (number % i === 0) {
                sumDividers++
            }
        }
    } else sumDividers = null
    if (sumDividers === 1) {
        return `${number} - простое число`
    } else if (sumDividers == undefined) {
        return `${number} - не простое и не составное число`
    }  else return `${number} - составное число`
}
console.log(getCharacterNum(997))