//wap tom find points lies 
var x=1 , y=1 , r=1; 

if(x*x+y*y==r*r)
console.log("Point ("+x+","+y+") Lies on the circle")

if(x*x+y*y>r*r)
console.log("Point ("+x+","+y+") Lies outside the circle")

if(x*x+y*y<r*r)
console.log("Point ("+x+","+y+") Lies inside the circle")

if(x==0 && y==0)
console.log("Point ("+x+","+y+") is center the circle")