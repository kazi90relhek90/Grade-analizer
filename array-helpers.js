// Array Helper Functions


function includes(item, array) {
    for (let n = 0 ; n < array.length; n++ )
        if (array[n] == item) {
            let Item = item
            return (Item == Item)
        }
}

function minItem (array) {
    let MinNum = 101
    for (let n = 0 ; n < array.length ; n++) {
        if (array[n] < MinNum) {
            MinNum = array[n]
        }
    }
    return (MinNum)
}

function maxItem (array) {
    var BigNum = 0 
    for (let n = 0 ; n < array.length ; n++) {
        if (array[n] > BigNum) {
            BigNum = array[n]
        }
    }
    return (BigNum)
}

function arrayAverage(array) {
    var sum = 0
    for (let x = 0 ; x < array.length ; x++) { 
        sum += array[x]
    }
    let average = sum / array.length
    return (average)
}