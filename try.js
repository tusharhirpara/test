/* */
function facto(n){
    if(n==1){
        return 1;
    }
    else
    {
        return n*facto(n-1);
    }
}
//ittrative
function recr(){
    var fact=1;
    for(var i=1;i<5;i++){
        fact=fact*i;
        console.log(fact);
    }
}
var a=recr();
console.log(a);
var ans=facto(5);
console.log(ans);

function sort(num){
    for(var i=0;i<num.length;i++){
        for(var j=i+1;j<num.length;j++){
            if(num[j]<num[i])
            {
                temp=num[j];
                num[j]=num[i];
                num[i]=temp;
            }
        }
        console.log(num[i]);
    }
}
var x=[1,3,2,4,5];
var ans=sort(x);

function sort(num){
    for(var i=0;i<num.length;i++){
        for(var j=i+1;j<num.length;j++){
            if(num[j]<num[i])
            {
                temp=num[j];
                num[j]=num[i];
                num[i]=temp;
            }
        }
        console.log(num[i]);
    }
}
var x=[1,3,2,4,5];
var ans=sort(x);

var number=[201,3,192,5,4];
number.forEach(function (param,k,ar) {
    for(var i=0;i<number.length;i++){
        for(var j=i+1;j<number.length;j++){
            if(ar[j]<ar[i]){
                temp=ar[j];
                ar[j]=ar[i];
                ar[i]=temp;
            }
        }
    }
    console.log(ar[k]);
});
 