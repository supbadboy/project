var bigList = [];
var lowerList = [];
var numberList = [];
var otherList = ["$", "_"];
for (var i = 65; i <= (65 + 25); i++) { //65是大写A  65+32 97(a) 
    var bigCode = String.fromCharCode(i);
    var lowerCode = String.fromCharCode(i + 32);
    bigList.push(bigCode);
    lowerList.push(lowerCode);
}
for (var i = 0; i <= 9; i++) {
    numberList.push(String(i));
}
var list = bigList.concat(lowerList, numberList, otherList);