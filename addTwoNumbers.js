/*
Steven Corbin
CSCI 252 Lab1
9/9/2015

*/
var sum1 = function (x, y) {
    document.getElementById("answer").innerHTML = 
	parseFloat(x) + parseFloat(y);
};

document.getElementById("getSum").onclick = function () {
    var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
    sum1(num1, num2);
};