function add (number){
    if(number == "") {
        return 0;
    }
    if(number.includes(",")) {
        var numberArray = number.split(",");
        return sum(numberArray);
    }
    else {
        return parseInt(number);
    }
};

function sum(numberArray) {
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++) {
        sum += parseInt(numberArray[i]);
    }
    return sum;
}

module.exports = add;