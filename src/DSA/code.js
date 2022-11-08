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
function factorial(N){
if(N===0 || N===1){
    return 1
}
else{
    return N*factorial(N-1)
}
}

// Sum of array by recursion
// 3
// 5
// 6 3 8 2 -4
// 5
// -10 -7 10 2 -2
// 5
// -4 -5 6 -3 9

function sum(n){
    if(n===0){
        return 0
    }
    else{
        return sum(arr,n-1)+(arr[n-1]);
    }
}

// Beyond Factorial!
// Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).
// You have to print the result up to 4 digits after the decimal point.
// 3

function check(n){
    if(n===1){
        return 0;
    }
    else{
        return Math.log(n)+ check(n-1)
    }
}
console.log(check(n).toFixed(4));

// Nick and Hacks
// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.
// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?

// 5
// 1
// 2
// 10
// 25
// 200

function nick(k,cur){
    if(k===cur){
        return true
    }
    if(cur>k){
        return false
    }
    return nick(k,cur*10) || nick(k,cur*20)
}
let cur=1
    nick(k,cur);
if(nick(k,cur)===true){
   console.log("Yes");
}
else if(nick(k,cur)===false){
    console.log("No");
}


// Power Function - Recursive
// Given two integers a and b, we need to find the value of a^b recursively.
// 2 4

function power(k,l){
    if(l===0){
        return 1;
    }
    else{
        return k*power(k,l-1)
    }
}
console.log(power(k,l));

// Perform Merging
// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.
// 4
// 1 5 7 9
// 2 4 6 8

var newarr = arr.concat(arr1);
var count3=0;
performerging(newarr,count);
console.log(newarr.join(" "));

function performerging(arr3,count){
    if(count > arr3.length-1){
        return; 
    }
     for(var i=0;i<arr3.length-1;i++){
         for(var j=0;j<arr3.length-i-1;j++){
             if(arr3[j]>arr3[j+1]){
                 swap(arr3,j,j+1);
             }
         }
     }
     return performerging(arr3,count+1);
  }
  function swap(arr3,i,j){
      var temp = arr3[i];
      arr3[i] = arr3[j];
      arr3[j] = temp;
  }

//   Binary Search - Iterative
// Given n distinct numbers, implement iterative binary search to check the presence of target number k.
// In case k is present among those n numbers, print 1
// Else print -1
// 5 0
// 2 -2 0 3 4

let l1=0;
let r1=n-1;
while(l1<=r1){
    let mid= Math.floor((l1+r1)/2);
    if(arr[mid]===k){
        return 1;
    }
    else if(arr[mid]>k){
        r1= mid-1;
    }
    else{
        l1=mid+1
    }
}
return -1;


// Binary Search - Recursive
// Given n distinct numbers, implement a recursive binary search to check the presence of target number k.
// In case k is present among those n numbers, print 1
// Else print -1
// 5 0
// 2 -2 0 3 4

let l2=0;
let r2=n-1
function binarysearchrecursive(arr,l,r,n,k){
    let mid= Math.floor((l2+(r2-l2)/2))

    if(arr[mid]===k){
        return 1;
    }
    else if(arr[mid]>k){
        binarysearchrecursive(arr,l2,mid-1,n,k)
    }
    else{
        binarysearchrecursive(arr,l2,mid+1,n,k)
    }
}
return -1;


// Upper Bound in LogN
// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)
// -> Test cases are such that there is always one number greater than k
// 10 3
// 0 2 4 4 5 5 7 7 9 10

function upper(){
    let l=1;
    let r=n-1;
    let i;
    while(l<=r){
        mid= Math.floor(l+(r-l)/2);
        if(arr[mid]<=k){
            l=mid+1;
        }
        else{
            i=mid;
            r=mid-1;
        }
    }
}
console.log(i);


// Minimum in sorted & rotated array
// Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.
// In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
// Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity
// 10
// 4 6 7 9 10 -1 0 1 2 3

arr.sort((a,b)=> a-b);
let l3= 0;
let r3=n-1;
let nums= arr[0]
while(l3<=r3){
    mid= Math.floor((l3+r3)/2);
    if(arr[mid]> nums){
        l3=mid-1;
    }
    else{
        r3=mid+1
    }
}
return nums;

// The Peak Point
// Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.
// Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1.
// 2
// 3
// 10 20 11
// 5
// 1 3 6 5 4

function peakpoint(arr,n){
    for(let i=0;i<n;i++){
        if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
            return i
        }
    }
    return -1;
}
console.log(peakpoint(arr,n));

// Coding Club Fight
// Piyush went to fight for Coding Club. There were N soldiers with various powers. 
// There will be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M).
//  After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight.
//  Count the number of soldiers that he can kill in each round and total sum of their powers.
// 7
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7
// 3
// 3
// 10
// 2

let sum=0;
let count4=0;
for(let i=0;i<n;i++){
    if(arr[i]<=l){
        count4++;
        sum+=arr[i];
    }
}
console.log(count4,sum);

// Find first positions of an element in a sorted array
// 1, 3, 5, 5, 5, 5, 67, 123, 125
// key = 5
let l4=0;
let h4=n-1;
let res= -1;
while(l4<=h4){
    mid= Math.floor((l4+h4)/2);
    if(arr[mid]==key){
        res=mid;
        h4=mid-1;
    }
    else if(arr[mid]>key){
        h4=mid-1;
    }
    else if(arr[mid]<key){
        l4=mid+1;
    }
}
return res;


// Find last positions of an element in a sorted array
// 1, 3, 5, 5, 5, 5, 67, 123, 125
// key = 5

let l5= 0;
let h5= n-1;
let re= -1;
while(l5<=h5){
    mid= Math.floor((l5+h5)/2);
    if(arr[mid]==key){
        res=mid;
        l5= mid+1;
    }
    else if(arr[mid]>key){
        h5=mid-1;
    }
    else if(arr[mid]<key){
        l5=mid+1;
    }
}
return re;


// find the peak element
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

let start = 0;
let end = nums.length - 1;
while (start < end) {t
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
        end = mid;
    } else if (nums[mid] < nums[mid + 1]) {
        start = mid + 1;
    }
}
return start;

// Plus One
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

for(let i=digits.length-1;i>=0;i--){
    digits[i]++;
    if(digits[i]> 9){
        digits[i]= 0;
    }
    else
     return digits;
}
    digits.unshift(1)
    return digits;


// Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [1,3,5,6], target = 5
// Output: 2

    let l6=0;
    let r6=nums.length-1;
    while(l6<=r6){
        mid= Math.floor(l6+(r6-l6)/2);
        if(nums[mid]===target){
            return mid;
        }
        else if(nums[mid]>target){
            r6=mid-1;
        }
        else{
            l6=mid+1
        }
    }
    return l;

// Search a 2D Matrix
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

    let left=0;
    let right=matrix[0].length-1;
    while(left<right){
        if(matrix[left][right]== target){
            return true;
        }
        else if(matrix[left][right]> target){
            right--;
        }
        else{
            left++;
        }
    }
    return false;

// Find Lucky Integer in an Array
// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.


    let obj={};
    for(let i=0;i<n;i++){
        if(arr[i]===undefined){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]= obj[arr[i]]+1;
        }
    }
    let max= -1;
    for(let key in obj){
        if(obj[key]== key && obj[key]> max){
            max= obj[key];
        }
    }
    return max;

    // Maximum Occurring Element
    // Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.
    // 5
    // 0 2 0 6 9

    let object={};
    for(let i=0;i<n;i++){
        if(arr[i]== undefined){
            object[arr[i]]=1;
        }
        else{
            object[arr[i]]= object[arr[i]]+1;
        }
    }
    let max1= -1;
    let num;
    for(let key in object){
        if(obj[key]> max1){
            max1= obj[key];
            num=key
        }
    }
    console.log(num);


// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

let str= x.toString();
let left1= 0;
let right1= str.length-1;
while(left1<right1){
    if(str[left1]!=str[right1]){
        return false;
    }
    else{
        left1++;
        right1++;
    }
}
return true


// Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input: nums = [2,2,1]
// Output: 1

let obj1= {};
for(let i=0;i<n;i++){
    if(arr[i]==undefined){
        obj1[arr[i]]=1;
    }
    else{
        obj1[arr[i]]= obj1[arr[i]]+1;
    }
}
    for(let key in obj1){
        if(obj1[key]==1){
            return key;
        }
    }

// Kth Largest Element in an Array 
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

    nums.sort((a,b)=> b-a);
    return nums[k-1];

// Power of Two  
// Given an integer n, return true if it is a power of two. Otherwise, return false.

    if(n<0){
        return false;
    }
    for(let i=0;i<n;i++){
    if(2**i==n){
        return true;
    }
    else if(2**i>n){
        return false;
    }
}

// Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.
// Input: n = 27
// Output: true
// Explanation: 27 = 33

if(n<=0){
    return false;
}
for(let i=0;i<n;i++){
    if(3**i==n){
        return true;
    }
    else if(3**i>n){
        return false;
    }
}
// in recursion ispowerofThree
function ispowerofThree(){
if(n<1){
    return false;
}
else if(n==1){
    return true;
}
else if(n%3==1){
    return false;
}
 return (ispowerofThree(n/3))
}

// Power of Four
// Given an integer n, return true if it is a power of four. Otherwise, return false.

 if(n<=0){
        return false;
    }
    for(let i=0;i<n;i++){
        if(4**i===n){
            return true;
        }
        else if(4**i>n){
            return false;
        }
    }