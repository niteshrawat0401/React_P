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

let stack=[]
if(k===1){
    stack.push(l)
}
else if(k===2){
        stack.pop()
}
else if(k===3){
    if(stack.length-1!=0){
        console.log(stack[stack.length-1]);
    }
    else{
        console.log("Empty!");
    }
}

// Reduce String
// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.
// For instance, the string aab could be shortened to b in one operation.
// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).
// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).
// str= aaabccddd

let stack1=[];
for(let i=0;i<n;i++){
    if(stack1[stack1.length]===0){
        stack1.push(str[i])
    }
    else if(stack1[stack1.length]===str[i]){
        stack1.pop()
    }
    else{
        stack1.push(str[i])
    }
}
if(stack1.length===0){
    console.log("Empty String");
}
else{
    console.log(stack1.join(""));
}

// SNE Modified
// Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side
// 8
// 39 27 11 4 24 32 32 1

let count=0;
let stack2=[];
for(let i=0;i<n;i++){
    while(stack2.length!==0 && arr[i]<=stack2[stack2.length-1]){
        stack2.pop();
    }
    if(stack2.length===0){
        count++;
    }
    else{
        continue;
    }
    stack2.push(arr[i])
}
console.log(count);

// Masai Sentence Reversal
// A Transformation in education

var arr= input.trim().split(" ");
    var bag="";
    for(let i=arr.length-1;i>=0;i--){
        bag+=arr[i]+" ";
    }
    console.log(bag);


// Array to String
// If elements of the array are 3 5 0 9 8 => the output string should be "35098" (without quotes). But in case of elements are negative (lesser than 0), your string should contain 0 instead of that number.
// 5
// 2 -4 6 8 -9

for(let i=0;i<n;i++){
    if(arr[i]<0){
        arr[i]=0
    }
}
console.log(arr[i].join(""));

// Factorial-Recursion
// 5
function factorial(){
if(N===0 || N===1){
    return 1
}
else{
    return N*factorial(N-1)
}
}