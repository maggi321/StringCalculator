function add (number){
    if(number == "") {
        return 0;
    }
    if(number.includes(",")) {
        var numberArray = number.split(/[\n | ,]/);
        return sum(numberArray);
    }
    else {
        return parseInt(number);
    }
};

function sum(numberArray) {
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++) {
        if(numberArray[i] < 0) {
            throw new Error("Negatives not allowed: " + numberArray[i]);
        }
        else {
            sum += parseInt(numberArray[i]);
        }
    }
    return sum;
}

module.exports = add;