// TWO SUM
// 3
// 4 9
// 2 7 11 15
// 5 10
// 1 2 3 5 5
// 2 100
// 48 49

let l=0;
let r=n-1;
while(l<r){
    if(arr1[l]+arr2[r]===k){
        return l+" "+r
    }
    else if(arr1[l]+arr2[r]>k){
        r--;
    }
    else{
        l++;
    }
}
return -1 -1;