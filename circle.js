//wap to find points lies 
var x=0 , y=0 , r=1; 
var dp=x*x+y*y
var dr=r*r

if(dp==dr)
console.log("Point ("+x+","+y+") Lies on the circle")

else if(dp>dr)
console.log("Point ("+x+","+y+") Lies outside the circle")

else if(dp<dr)
console.log("Point ("+x+","+y+") Lies inside the circle")

else
console.log("Point ("+x+","+y+") is center the circle")