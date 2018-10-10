function add (number){
    if(number == "") {
        return 0;
    }
    if(number.includes(",")) {
        var numberArray = number.split(",");
        var sum = 0;
        for(var i = 0; i < numberArray.length; i++) {
            sum += parseInt(numberArray[i]);
        }
        return sum;
    }
    else {
        return parseInt(number);
    }
};

module.exports = add;