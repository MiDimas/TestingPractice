const arrToString = (arr) => {
    return arr.filter(elem => Number.isInteger(elem))
        .map(String)
}

module.exports = arrToString;