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


// Selection Sort Problem
// 5
// 3 5 0 9 8

function swap(arr,i,j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp
}

for(let i=0;i<n-1;i++){
    index=i;
    for(let j=i+1;j<n;j++){
        if(arr[index]>arr[j]){
            swap(arr,index,j);
        }
    }
}
console.log(arr.join(" "));


// Bubble Sort Problem
// 5
// 3 5 0 9 8

for(let i=0;i<n-1;i++){
    for(let j=0;j<n-i-1;j++){
        if(arr[j]>arr[j+1]){
            swap(arr,j,j+1)
        }
    }
}
console.log(arr.join(" "));


// Push, Pop and Top
// 1 x : Push x to the top of the stack.
// 2 : Pop an element from the top of the stack. If the stack is empty, do nothing.
// 3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

// 6
// 1 15
// 1 20
// 2
// 3
// 2
// 3