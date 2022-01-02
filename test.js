// var a = 100;
// function f1(x) {
//     //var a = a + x;
//     a = a + x;
//     return a;
// }
// //console.log(f1(2));
//*******************************************************************************//
// var DateOfToday = new Date();
// var today = DateOfToday.getDay();
// console.log(today)
//*******************************************************************************//
function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create)                // If Object.create() is defined...
        return Object.create(p);      //    then just use it.
    var t = typeof p;                 // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                  // Define a dummy constructor function.
    f.prototype = p;                  // Set its prototype property to p.
    return new f();                   // Use f() to create an "heir" of p
}

var o = {};
o.x = 1;
var p = inherit(o);				//p继承o和Object.prototype
p.y = 2;
var q = inherit(p);
q.z = 3;
var res = q.x + q.y
console.log(res);