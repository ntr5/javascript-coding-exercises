// let playerOne = 'Tiffany'
// let playerTwo = 'Kristine'

// let tempPlayerOne = playerOne
// let tempPlayerTwo = playerTwo

// playerOne = playerTwo
// playerTwo = tempPlayerOne

// [playerOne, playerTwo] = [playerTwo, playerOne]

// console.log(playerOne)
// console.log(playerTwo)

const swapVaribleValues = (var1, var2) => {
    [var1, var2] = [var2, var1]
    return `var 1 = ${var1}\nvar 2 = ${var2}`
}

swapVaribleValues('Tiffany', 'Kristine')