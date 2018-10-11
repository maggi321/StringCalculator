function add (number){
    var delimiter = [",","\\n"]
    if(number == "") {
        return 0;
    }
    if(number != "") {
        if(number.indexOf("//") === 0) {
            delimiter.push(number.substring(2,number.indexOf("\n")));
            number = number.substring(number.indexOf("\n") + 1);
        }
        var numberArray = number.split(new RegExp (delimiter.join("|"), "g"));
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
        if(numberArray[i] < 1001) {
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