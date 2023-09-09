// write a program to interchange/exchange/swap of two number
// Two Standard Methods for swap the numbers
// 1.suing temporary variable.

var a = 10, b = 20, t
console.log("Before Swaping of a ="+a+" b="+b);
t = a;
a = b;
b = t;
console.log("After Swaping of a ="+a+" b="+b);

// 2.witout using temporary variables(maths)
var x = 10, y=20, t
console.log("Before Swaping of x ="+x+" y="+y);
a=a+b-(b=a);
console.log("After Swaping of x ="+x+" y="+y); 