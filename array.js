// const array2 = [1,2,3,4,5];
// var SumOfArray2 = 0;
// // array2.forEach(function(x) {
// //     SumOfArray2 += x*x;
// // });

// array2.forEach(x => SumOfArray2 += x*x);//箭头表达式

// console.log(SumOfArray2);

// var a = [1,2,3];
// var b = [];
// var b = a.concat(4, 5);
// console.log(b);

var a = [1,2,3];
var b = a.map(x => x*2);
console.log(b);