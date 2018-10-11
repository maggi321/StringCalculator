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
    var negatives = [];
    for(var i = 0; i < numberArray.length; i++) {
        if(numberArray[i] < 0) {
            negatives.push(numberArray[i]);
        }
        else {
            sum += parseInt(numberArray[i]);
        }
    }
    if(negatives.length != 0) {
        throw new Error("Negatives not allowed: " + negatives);
    }
    else {
        return sum;
    }
}

module.exports = add;