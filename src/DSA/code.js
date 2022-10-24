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

// Two Sorted Arrays
// 1
// 6
// 1 2 2 3 4 5
// 4 4 3 2 1 1

let s=0;
let e=n-1;
let count1=0;
while(s<e && n>=0){
    if(arr1[s]===arr2[e]){
        count1++;
        s++;
        e--;
    }
    else if(arr1[s]>arr2[e]){
        e--;
    }
    else{
        s++;
    }
}
console.log(count);

//element is larger than its neighbour
// 8
// 1 2 3 4 2 1 6 5

let count2=0;
for(let i=0;i<n;i++){
    if(i===0){
        if(arr[i]>arr[i+1]){
            count2++
        }
    }
    else if(i===n-1){
        if(arr[i]>arr[i-1]){
            count2++;
        }
    }
    else if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        count2++;
    }
}
console.log(count2);


