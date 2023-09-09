// gs = bf+hra+da
var bs,da,gs,hra;
bs=1000;
if(bs<1500)
{
    hra=bs*0.1;
    da = 0.9*bs
}
if(bs>=1500){
    hra=500;
    da=0.98*bs
}
gs = bs+hra+da;
console.log(gs)