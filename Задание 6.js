// четсно говоря, не очень поняла, что нужно по заданию
let arr = [3, 7, 8, 13, 15, 21, 77, 33, 6, 8, 55, 13, 77, 0]
let ks=[];
for(var value of arr){
    ks[value] = (ks[value]||0)+1;
}
let arr2 =[];
for(var i in arr) {
  if ( ks[ arr[i] ] > 1 ) {
        arr2.push(arr[i]);
        ks[ arr[i] ] = 0;
    }
}
 
console.log(arr2);