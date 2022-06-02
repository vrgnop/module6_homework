let array = [1, 0, 0, 2, null]

function getCharacterNum (arrayInput) {
    let evenNum = 0
    let oddNum = 0
    let zeroNum = 0
    let nullNum = 0

    for (let i = 0; i < arrayInput.length; i++) {
        if (arrayInput[i] == undefined) {
            nullNum++
        } else if (arrayInput[i] === 0) {
            zeroNum++
        } else if ((arrayInput[i] % 2) === 0) {
            evenNum++
        } else {
            oddNum++
        }
    }
    console.log(`${evenNum} - четных, ${oddNum} - нечетных ${zeroNum} - нулей ${nullNum} - null`)
}

getCharacterNum(array)