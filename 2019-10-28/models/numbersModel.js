const listNumbers = []

const addNumber = (num) => listNumbers.push(num)

const getNumbers = () => JSON.parse( JSON.stringify(listNumbers))

const updateNumber = (num , newNum)=> {
    const index = listNumbers.findIndex(number => number === num) 
    listNumbers[index] = newNum
}

const deleteNumber = (num) =>{ 
    const index = listNumbers.findIndex(number => number === num) 
    listNumbers.splice(index,1);
}

module.exports = {
    addNumber,
    getNumbers,
    updateNumber,
    deleteNumber
}