// // TWO SUM
// // 3
// // 4 9
// // 2 7 11 15
// // 5 10
// // 1 2 3 5 5
// // 2 100
// // 48 49

// let l=0;
// let r=n-1;
// while(l<r){
//     if(arr1[l]+arr2[r]===k){
//         return l+" "+r
//     }
//     else if(arr1[l]+arr2[r]>k){
//         r--;
//     }
//     else{
//         l++;
//     }
// }
// return -1 -1;

// // Two Sorted Arrays
// // 1
// // 6
// // 1 2 2 3 4 5
// // 4 4 3 2 1 1

// let s=0;
// let e=n-1;
// let count1=0;
// while(s<e && n>=0){
//     if(arr1[s]===arr2[e]){
//         count1++;
//         s++;
//         e--;
//     }
//     else if(arr1[s]>arr2[e]){
//         e--;
//     }
//     else{
//         s++;
//     }
// }
// console.log(count);

// //element is larger than its neighbour
// // 8
// // 1 2 3 4 2 1 6 5

// let count2=0;
// for(let i=0;i<n;i++){
//     if(i===0){
//         if(arr[i]>arr[i+1]){
//             count2++
//         }
//     }
//     else if(i===n-1){
//         if(arr[i]>arr[i-1]){
//             count2++;
//         }
//     }
//     else if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
//         count2++;
//     }
// }
// console.log(count2);


// // Selection Sort Problem
// // 5
// // 3 5 0 9 8

// function swap(arr,i,j){
//     let temp=arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp
// }

// for(let i=0;i<n-1;i++){
//     index=i;
//     for(let j=i+1;j<n;j++){
//         if(arr[index]>arr[j]){
//             swap(arr,index,j);
//         }
//     }
// }
// console.log(arr.join(" "));


// // Bubble Sort Problem
// // 5
// // 3 5 0 9 8

// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             swap(arr,j,j+1)
//         }
//     }
// }
// console.log(arr.join(" "));


// // Push, Pop and Top
// // 1 x : Push x to the top of the stack.
// // 2 : Pop an element from the top of the stack. If the stack is empty, do nothing.
// // 3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

// // 6
// // 1 15
// // 1 20
// // 2
// // 3
// // 2
// // 3

// let stack=[]
// if(k===1){
//     stack.push(l)
// }
// else if(k===2){
//         stack.pop()
// }
// else if(k===3){
//     if(stack.length-1!=0){
//         console.log(stack[stack.length-1]);
//     }
//     else{
//         console.log("Empty!");
//     }
// }

// // Reduce String
// // You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.
// // For instance, the string aab could be shortened to b in one operation.
// // Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).
// // Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).
// // str= aaabccddd

// let stack1=[];
// for(let i=0;i<n;i++){
//     if(stack1[stack1.length]===0){
//         stack1.push(str[i])
//     }
//     else if(stack1[stack1.length]===str[i]){
//         stack1.pop()
//     }
//     else{
//         stack1.push(str[i])
//     }
// }
// if(stack1.length===0){
//     console.log("Empty String");
// }
// else{
//     console.log(stack1.join(""));
// }

// // SNE Modified
// // Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side
// // 8
// // 39 27 11 4 24 32 32 1

// let count=0;
// let stack2=[];
// for(let i=0;i<n;i++){
//     while(stack2.length!==0 && arr[i]<=stack2[stack2.length-1]){
//         stack2.pop();
//     }
//     if(stack2.length===0){
//         count++;
//     }
//     else{
//         continue;
//     }
//     stack2.push(arr[i])
// }
// console.log(count);

// // Masai Sentence Reversal
// // A Transformation in education

// var arr= input.trim().split(" ");
//     var bag="";
//     for(let i=arr.length-1;i>=0;i--){
//         bag+=arr[i]+" ";
//     }
//     console.log(bag);


// // Array to String
// // If elements of the array are 3 5 0 9 8 => the output string should be "35098" (without quotes). But in case of elements are negative (lesser than 0), your string should contain 0 instead of that number.
// // 5
// // 2 -4 6 8 -9

// for(let i=0;i<n;i++){
//     if(arr[i]<0){
//         arr[i]=0
//     }
// }
// console.log(arr[i].join(""));

// // Factorial-Recursion
// // 5
// function factorial(N){
// if(N===0 || N===1){
//     return 1
// }
// else{
//     return N*factorial(N-1)
// }
// }

// // Sum of array by recursion
// // 3
// // 5
// // 6 3 8 2 -4
// // 5
// // -10 -7 10 2 -2
// // 5
// // -4 -5 6 -3 9

// function sum(n){
//     if(n===0){
//         return 0
//     }
//     else{
//         return sum(arr,n-1)+(arr[n-1]);
//     }
// }

// // Beyond Factorial!
// // Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).
// // You have to print the result up to 4 digits after the decimal point.
// // 3

// function check(n){
//     if(n===1){
//         return 0;
//     }
//     else{
//         return Math.log(n)+ check(n-1)
//     }
// }
// console.log(check(n).toFixed(4));

// // Nick and Hacks
// // Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.
// // Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?

// // 5
// // 1
// // 2
// // 10
// // 25
// // 200

// function nick(k,cur){
//     if(k===cur){
//         return true
//     }
//     if(cur>k){
//         return false
//     }
//     return nick(k,cur*10) || nick(k,cur*20)
// }
// let cur=1
//     nick(k,cur);
// if(nick(k,cur)===true){
//    console.log("Yes");
// }
// else if(nick(k,cur)===false){
//     console.log("No");
// }


// // Power Function - Recursive
// // Given two integers a and b, we need to find the value of a^b recursively.
// // 2 4

// function power(k,l){
//     if(l===0){
//         return 1;
//     }
//     else{
//         return k*power(k,l-1)
//     }
// }
// console.log(power(k,l));

// // Perform Merging
// // You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.
// // 4
// // 1 5 7 9
// // 2 4 6 8

// var newarr = arr.concat(arr1);
// var count3=0;
// performerging(newarr,count);
// console.log(newarr.join(" "));

// function performerging(arr3,count){
//     if(count > arr3.length-1){
//         return; 
//     }
//      for(var i=0;i<arr3.length-1;i++){
//          for(var j=0;j<arr3.length-i-1;j++){
//              if(arr3[j]>arr3[j+1]){
//                  swap(arr3,j,j+1);
//              }
//          }
//      }
//      return performerging(arr3,count+1);
//   }
//   function swap(arr3,i,j){
//       var temp = arr3[i];
//       arr3[i] = arr3[j];
//       arr3[j] = temp;
//   }

// //   Binary Search - Iterative
// // Given n distinct numbers, implement iterative binary search to check the presence of target number k.
// // In case k is present among those n numbers, print 1
// // Else print -1
// // 5 0
// // 2 -2 0 3 4

// let l1=0;
// let r1=n-1;
// while(l1<=r1){
//     let mid= Math.floor((l1+r1)/2);
//     if(arr[mid]===k){
//         return 1;
//     }
//     else if(arr[mid]>k){
//         r1= mid-1;
//     }
//     else{
//         l1=mid+1
//     }
// }
// return -1;


// // Binary Search - Recursive
// // Given n distinct numbers, implement a recursive binary search to check the presence of target number k.
// // In case k is present among those n numbers, print 1
// // Else print -1
// // 5 0
// // 2 -2 0 3 4

// let l2=0;
// let r2=n-1
// function binarysearchrecursive(arr,l,r,n,k){
//     let mid= Math.floor((l2+(r2-l2)/2))

//     if(arr[mid]===k){
//         return 1;
//     }
//     else if(arr[mid]>k){
//         binarysearchrecursive(arr,l2,mid-1,n,k)
//     }
//     else{
//         binarysearchrecursive(arr,l2,mid+1,n,k)
//     }
// }
// return -1;


// // Upper Bound in LogN
// // You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)
// // -> Test cases are such that there is always one number greater than k
// // 10 3
// // 0 2 4 4 5 5 7 7 9 10

// function upper(){
//     let l=1;
//     let r=n-1;
//     let i;
//     while(l<=r){
//         mid= Math.floor(l+(r-l)/2);
//         if(arr[mid]<=k){
//             l=mid+1;
//         }
//         else{
//             i=mid;
//             r=mid-1;
//         }
//     }
// }
// console.log(i);


// // Minimum in sorted & rotated array
// // Given an array of length n, and it is sorted and rotated at some unknown point, find the minimum element in it.
// // In a sorted & rotated array,  we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
// // Please note that the linear search approach with the time complexity of O(n) can easily be applied. But you are expected to solve it in O(log n) time complexity
// // 10
// // 4 6 7 9 10 -1 0 1 2 3

// arr.sort((a,b)=> a-b);
// let l3= 0;
// let r3=n-1;
// let nums= arr[0]
// while(l3<=r3){
//     mid= Math.floor((l3+r3)/2);
//     if(arr[mid]> nums){
//         l3=mid-1;
//     }
//     else{
//         r3=mid+1
//     }
// }
// return nums;

// // The Peak Point
// // Given an array of size n, which is strictly increasing and then strictly decreasing in order. Find out the index (0-based) which is the peak of the array.
// // Note that the extremities are not considered as peak and there exists a peak which is not at index 0 or at n-1.
// // 2
// // 3
// // 10 20 11
// // 5
// // 1 3 6 5 4

// function peakpoint(arr,n){
//     for(let i=0;i<n;i++){
//         if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
//             return i
//         }
//     }
//     return -1;
// }
// console.log(peakpoint(arr,n));

// // Coding Club Fight
// // Piyush went to fight for Coding Club. There were N soldiers with various powers. 
// // There will be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M).
// //  After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight.
// //  Count the number of soldiers that he can kill in each round and total sum of their powers.
// // 7
// // 1 
// // 2 
// // 3 
// // 4 
// // 5 
// // 6 
// // 7
// // 3
// // 3
// // 10
// // 2

// let sum=0;
// let count4=0;
// for(let i=0;i<n;i++){
//     if(arr[i]<=l){
//         count4++;
//         sum+=arr[i];
//     }
// }
// console.log(count4,sum);

// // Find first positions of an element in a sorted array
// // 1, 3, 5, 5, 5, 5, 67, 123, 125
// // key = 5
// let l4=0;
// let h4=n-1;
// let res= -1;
// while(l4<=h4){
//     mid= Math.floor((l4+h4)/2);
//     if(arr[mid]==key){
//         res=mid;
//         h4=mid-1;
//     }
//     else if(arr[mid]>key){
//         h4=mid-1;
//     }
//     else if(arr[mid]<key){
//         l4=mid+1;
//     }
// }
// return res;


// // Find last positions of an element in a sorted array
// // 1, 3, 5, 5, 5, 5, 67, 123, 125
// // key = 5

// let l5= 0;
// let h5= n-1;
// let re= -1;
// while(l5<=h5){
//     mid= Math.floor((l5+h5)/2);
//     if(arr[mid]==key){
//         res=mid;
//         l5= mid+1;
//     }
//     else if(arr[mid]>key){
//         h5=mid-1;
//     }
//     else if(arr[mid]<key){
//         l5=mid+1;
//     }
// }
// return re;


// // find the peak element
// // Input: nums = [1,2,3,1]
// // Output: 2
// // Explanation: 3 is a peak element and your function should return the index number 2.

// let start = 0;
// let end = nums.length - 1;
// while (start < end) {t
//     let mid = Math.floor(start + (end - start) / 2);
//     if (nums[mid] > nums[mid + 1]) {
//         end = mid;
//     } else if (nums[mid] < nums[mid + 1]) {
//         start = mid + 1;
//     }
// }
// return start;

// // Plus One
// // Input: digits = [1,2,3]
// // Output: [1,2,4]
// // Explanation: The array represents the integer 123.
// // Incrementing by one gives 123 + 1 = 124.
// // Thus, the result should be [1,2,4].

// for(let i=digits.length-1;i>=0;i--){
//     digits[i]++;
//     if(digits[i]> 9){
//         digits[i]= 0;
//     }
//     else
//      return digits;
// }
//     digits.unshift(1)
//     return digits;


// // Search Insert Position
// // Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// // You must write an algorithm with O(log n) runtime complexity.

// // Input: nums = [1,3,5,6], target = 5
// // Output: 2

//     let l6=0;
//     let r6=nums.length-1;
//     while(l6<=r6){
//         mid= Math.floor(l6+(r6-l6)/2);
//         if(nums[mid]===target){
//             return mid;
//         }
//         else if(nums[mid]>target){
//             r6=mid-1;
//         }
//         else{
//             l6=mid+1
//         }
//     }
//     return l;

// // Search a 2D Matrix
// // Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// // Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// // Output: true

//     let left=0;
//     let right=matrix[0].length-1;
//     while(left<right){
//         if(matrix[left][right]== target){
//             return true;
//         }
//         else if(matrix[left][right]> target){
//             right--;
//         }
//         else{
//             left++;
//         }
//     }
//     return false;

// // Find Lucky Integer in an Array
// // Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
// // Input: arr = [2,2,3,4]
// // Output: 2
// // Explanation: The only lucky number in the array is 2 because frequency[2] == 2.


//     let obj={};
//     for(let i=0;i<n;i++){
//         if(arr[i]===undefined){
//             obj[arr[i]]=1;
//         }
//         else{
//             obj[arr[i]]= obj[arr[i]]+1;
//         }
//     }
//     let max= -1;
//     for(let key in obj){
//         if(obj[key]== key && obj[key]> max){
//             max= obj[key];
//         }
//     }
//     return max;

//     // Maximum Occurring Element
//     // Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.
//     // 5
//     // 0 2 0 6 9

//     let object={};
//     for(let i=0;i<n;i++){
//         if(arr[i]== undefined){
//             object[arr[i]]=1;
//         }
//         else{
//             object[arr[i]]= object[arr[i]]+1;
//         }
//     }
//     let max1= -1;
//     let num;
//     for(let key in object){
//         if(obj[key]> max1){
//             max1= obj[key];
//             num=key
//         }
//     }
//     console.log(num);


// // Palindrome Number
// // Given an integer x, return true if x is a palindrome, and false otherwise.
// // Input: x = 121
// // Output: true
// // Explanation: 121 reads as 121 from left to right and from right to left.

// let str= x.toString();
// let left1= 0;
// let right1= str.length-1;
// while(left1<right1){
//     if(str[left1]!=str[right1]){
//         return false;
//     }
//     else{
//         left1++;
//         right1++;
//     }
// }
// return true


// // Single Number
// // Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// // Input: nums = [2,2,1]
// // Output: 1

// let obj1= {};
// for(let i=0;i<n;i++){
//     if(arr[i]==undefined){
//         obj1[arr[i]]=1;
//     }
//     else{
//         obj1[arr[i]]= obj1[arr[i]]+1;
//     }
// }
//     for(let key in obj1){
//         if(obj1[key]==1){
//             return key;
//         }
//     }

// // Kth Largest Element in an Array 
// // Given an integer array nums and an integer k, return the kth largest element in the array.
// // Note that it is the kth largest element in the sorted order, not the kth distinct element.
// // Input: nums = [3,2,1,5,6,4], k = 2
// // Output: 5

//     nums.sort((a,b)=> b-a);
//     return nums[k-1];

// // Power of Two  
// // Given an integer n, return true if it is a power of two. Otherwise, return false.

//     if(n<0){
//         return false;
//     }
//     for(let i=0;i<n;i++){
//     if(2**i==n){
//         return true;
//     }
//     else if(2**i>n){
//         return false;
//     }
// }

// // Power of Three
// // Given an integer n, return true if it is a power of three. Otherwise, return false.
// // Input: n = 27
// // Output: true
// // Explanation: 27 = 33

// if(n<=0){
//     return false;
// }
// for(let i=0;i<n;i++){
//     if(3**i==n){
//         return true;
//     }
//     else if(3**i>n){
//         return false;
//     }
// }
// // in recursion ispowerofThree
// function ispowerofThree(){
// if(n<1){
//     return false;
// }
// else if(n==1){
//     return true;
// }
// else if(n%3==1){
//     return false;
// }
//  return (ispowerofThree(n/3))
// }

// // Power of Four
// // Given an integer n, return true if it is a power of four. Otherwise, return false.

//  if(n<=0){
//         return false;
//     }
//     for(let i=0;i<n;i++){
//         if(4**i===n){
//             return true;
//         }
//         else if(4**i>n){
//             return false;
//         }
//     }


// // Valid Palindrome II
// // Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// // Input: s = "aba"
// // Output: true

// let left2=0;
// let right2= n-1;
// while(left2<right2){
//     if(s[left2]!=s[right2]){
//         palindrome(s,left2+1,right2) || palindrome(s,left2,right2-1);
//     }
//     left2++;
//     right2--;
// }
// return true;

// function palindrome(s,left2,right2){
//     if(s[left2]!=s[right2]){
//         return false;
//     }
//     else{
//         left2++;
//         right2--;
//     }
// }
// return true;

// // Find Pivot Index
// // The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// // If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
// // Input: nums = [1,7,3,6,5,6]
// // Output: 3
// // Explanation:
// // The pivot index is 3.
// // Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// // Right sum = nums[4] + nums[5] = 5 + 6 = 11

// let sum= nums.reduce((a,b)=> a+b);
// let left3=0;
// let right3=0;
// for(let i=0;i<n;i++){
//     right3=sum-left3-nums[i];
//     if(left3==right3){
//         return i;
//     }
//     left3+= nums[i];
// }
// return -1;

// // Lemonade Change
// // Input: bills = [5,5,5,10,20]
// // Output: true
// // Explanation: 
// // From the first 3 customers, we collect three $5 bills in order.
// // From the fourth customer, we collect a $10 bill and give back a $5.
// // From the fifth customer, we give a $10 bill and a $5 bill.
// // Since all customers got correct change, we output true.

// let five=0;
// let ten=0;
// for(let i=0;i<n;i++){
//     if(bills[i]==5){
//         five++;
//     }
//     else if(bills[i]==10){
//         if(five==0){
//             return false;
//         }
//         five--;
//         ten++;
//     }
//     else{
//         if(ten>=1 && five>=1){
//             ten--;
//             five--;
//         }
//         else if(five>=3){
//             five=five-3
//         }
//         else{
//             return false
//         }
//     }
// }
// return true;

// // Squares of a Sorted Array
// // Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// // Input: nums = [-4,-1,0,3,10]
// // Output: [0,1,9,16,100]
// // Explanation: After squaring, the array becomes [16,1,0,9,100].
// // After sorting, it becomes [0,1,9,16,100].

// let pro=0;
// for(let i=0;i<n;i++){
//     pro.push(nums[i]*nums[i]);
// }
// pro.sort((a,b)=> a-b);
// return pro;


// // Remove Duplicates from Sorted Array
// // Input: nums = [1,1,2]
// // Output: 2, nums = [1,2,_]
// let index=1;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]!= nums[i-1]){
//         nums[index++]= nums[i];
//     }
// }return index;

// // Remove Element
// // Input: nums = [3,2,2,3], val = 3
// // Output: 2, nums = [2,2,_,_]
// let no= 1;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]!== val){
//         nums[no]= nums[i];
//         no++;
//     }
// }return no;


// // add zero at the end of array
// // let arr= [4,5,8,1,0,9,0,3];
// // output [4,5,8,1,9,3,0,0]
// let arr1=[]
// let arr2=[]
// for(let i=0;i<arr.length;i++){
//   if(arr[i]==0){
//     arr1.push(arr[i])
//   }
//   else{
//     arr2.push(arr[i])
//   }
// }
// let arr3= arr2.concat(arr1)
// console.log(arr3)

// // Sqrt(x)
// // Input: x = 4
// // Output: 2
//     return Math.floor(Math.sqrt(x))

// // Valid Parentheses
// var isValid = function(s) {
//     let stack = [];
//     for(let i=0;i<s.length;i++){
//         if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
//             stack.push(s[i]);
//         }
//         else{
//             if(s[i] === ')'){
//                 if(stack.pop() !== '('){
//                     return false;
//                 }
//             }
//             else if(s[i] === ']'){
//                 if(stack.pop() !== '['){
//                     return false;
//                 }
//             }
//             else if(s[i] === '}'){
//                 if(stack.pop() !== '{'){
//                     return false;
//                 }
//             }
//         }
//     }
//     return true && !stack.length;
// };

// // let a = "nitin"
// // let b = "itnin"
// // let a = "abcde"
// // let b = "bcfda"
// flag =false
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         if(a[i] === b[j])   {
//             flag =true
//         }
//         else if(a[i] !== b[j])   {
//             flag =false
//         }
//     }
// }
// if(flag === true){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// // Given a string s, find the length of the longest substring without repeating characters.
// // Input: s = "abcabcbb" // Output: 3 // Explanation: The answer is "abc", with the length of 3.

// // Input: s = "bbbbb"
// // Output: 1 // Explanation: The answer is "b", with the length of 1.

// // Input: s = "pwwkew"
// // Output: 3 // Explanation: The answer is "wke", with the length of 3. // Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// var lengthOfLongestSubstring = function(s) {
//     let start = 0;
//     let end = 0;
//     let max = 0;
//     let unique = new Set();
 
//     if(!s.length){
//         return 0;
//     }
 
//      while(end < s.length){
//          if(!unique.has(s[end])){
//              unique.add(s[end]);
//              end++;
//              max = Math.max(max, unique.size)
//          }
//          else{
//              if(unique.has(s[end])){
//                  unique.delete(s[start]);
//                  start++;
//              }
//          }
//      }
//      return max
 
//  };


// //  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
// // Input: s = "leetcode" // Output: 0 // Example 2:

// // Input: s = "loveleetcode" // Output: 2

// // Input: s = "aabb" // Output: -1

//  var firstUniqChar = function(s) {
//     let obj = {};
//     for(let i=0;i<s.length;i++){
//         if(obj[s[i]] === undefined){
//             obj[s[i]] = 1;
//         }
//         else{
//             obj[s[i]]++;
//         }
//     }
//     for(let j=0;j<s.length;j++){
//         if(obj[s[j]] === 1){
//             return j;
//         }
//     }
//     return -1;
// };

// function maximumOccurring(str){
//     let obj = {};
//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]] === undefined){
//             obj[str[i]] = 1;
//         }
//         else{
//             obj[str[i]]++;
//         }
//     }

//     let max = -Infinity;
//     for(let key in obj){
//         if(obj[key] > max){
//             max = obj[key]
//             num = key
//         }
//     }
//     console.log(num);
    
// }
// let string = "geeksforgeeks";
// maximumOccurring(string)


// // Rotate String
// // Example 1:
// // Input: s = "abcde", goal = "cdeab"
// // Output: true
// // Example 2:
// // Input: s = "abcde", goal = "abced"
// // Output: false
// var rotateString = function(s, goal) {
//     let flag = false
//     let p = s.split("")
//      for(let i=0;i<s.length;i++){
//          let q =p.shift()
//          p.push(q)
//          let r = p.join("")
//          if(r === goal){
//              flag = true
//          }
//     }  
//     if(flag === true){
//         return true;
//     }
//         return false;

// };

// // Input: words = ["abc","car","ada","racecar","cool"] // Output: "ada"
// // Explanation: The first string that is palindromic is "ada".
// // Note that "racecar" is also palindromic, but it is not the first.
// // Example 2:

// // Input: words = ["notapalindrome","racecar"] // Output: "racecar"
// // Explanation: The first and only string that is palindromic is "racecar".
// // Example 3:

// // Input: words = ["def","ghi"] // Output: ""
// // Explanation: There are no palindromic strings, so the empty string is returned.
// var firstPalindrome = function(words) {
//     for(let i=0;i<words.length;i++){
//         let j = words[i];
//             let x = palindrome(j)
//             if(x === true){
//                 return j
//             }
//     }
//         return ""
// }
//     function palindrome(j){
//     let l =0;
//     let r =j.length-1
//     while( l<r){
//         if(j[l] !== j[r]){
//             return false
//         }
//         l++;
//         r--;
//     }
//     return true
// }

// // Input: strs = ["eat","tea","tan","ate","nat","bat"]
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// // Example 2:

// // Input: strs = [""]
// // Output: [[""]]
// // Example 3:

// // Input: strs = ["a"]
// // Output: [["a"]]
// var groupAnagrams = function(strs) {
//     let obj = {};
//     for(let i=0;i<strs.length;i++){
//         let s = strs[i].split("").sort().join("");
//         if(obj[s] === undefined){
//             obj[s] = [strs[i]];
//         }   
//         else{
//             obj[s].push(strs[i])
//         }
//     }
//     let arr = [];
//     for(let key in obj){
//         arr.push(obj[key])
//     }
//     return arr
// };


// // Input: n = 3
// // Output: ["1","2","Fizz"]
// // Example 2:
// // Input: n = 5
// // Output: ["1","2","Fizz","4","Buzz"]
// // Example 3:
// // Input: n = 15
// // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
// var fizzBuzz = function(n) {
//     let arr = [];
//     for(let i=1;i<=n;i++){
//         if(i % 3 == 0 && i % 5 == 0){
//             arr.push("FizzBuzz")
//         }
//         else if(i % 3 == 0){
//             arr.push("Fizz")
//         }
//         else if(i % 5 == 0){
//             arr.push("Buzz")
//         }
//         else{
//             let a = i.toString()
//             arr.push(a)
//         }
//     }
//     return arr
// };

// // Input: numbers = [2,7,11,15], target = 9
// // Output: [1,2]
// // Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// // Example 2:

// // Input: numbers = [2,3,4], target = 6
// // Output: [1,3]
// // Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// // Example 3:

// // Input: numbers = [-1,0], target = -1
// // Output: [1,2]
// // Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
// var twoSum = function(numbers, target) {
//     let l= 0;
//     let r= numbers.length-1;
//     let sum = 0
//     while(l < r){
//         sum = numbers[l] + numbers[r];
//         if(sum == target){
//             arr.push(l+1, r+1)
//         }
//         else if(sum > target){
//             r--
//         }
//         else{
//             l++;
//         }
//     }
//     return arr
// };

let arr = [6,5,6,12,18,5,18,9]
    let obj = {}
      for(let i=0;i<arr.length;i++){
        if(obj[arr[i]] === undefined){
          obj[arr[i]] = 1
        }
        else{
          obj[arr[i]]++
        }
      }
      let arr1 = []
      for(let key in obj){
        if(obj[key] > 1){
            arr1.push(key)
        }
      }
    //   console.log(arr1);

    
    let array = [1,2,14,13,5,18,17];
    let a = array.sort((a,b) => b - a)
    let max = Infinity;
    for(let i=0;i<=1;i++){
        if(a[i] < max){
            max = a[i]
            // console.log(max);
        }
    }
    console.log(max);
    // [1,2,5,13,14,17,18]
    // for (i = a.length - 2; i >= 0; i--) {
    //     // if the element is not
    //     // equal to largest element
    //     if (a[i] != a[a.length - 1]) {
    //         console.log("The second largest element is " + a[i]);
    //         return;
    //     }
    // }


// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
//     var duplicateZeros = function(arr) {
//       for(let i=0;i<arr.length;i++){
//           if(arr[i] === 0){
//               arr.splice(i, 0, 0);
//               arr.pop()
//               i++
//           }
//       }
//       return arr
//  };


//  Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
//  Example 1:
//  Input: n = 2
//  Output: [0,1,1]
//  Explanation:
//  0 --> 0
//  1 --> 1
//  2 --> 10
//  Example 2:
//  Input: n = 5
//  Output: [0,1,1,2,1,2]
//  Explanation:
//  0 --> 0
//  1 --> 1
//  2 --> 10
//  3 --> 11
//  4 --> 100
//  5 --> 101
//  var countBits = function(n) {
//     const ans = new Array(n + 1).fill(0);
//     console.log(ans)
//    for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       ans[i] = ans[i / 2];

//     } else {
//       ans[i] = ans[Math.floor(i / 2)] + 1;
//     }
//   }
//   return ans;
// };


// function SearchingChallenge(str) { 
//     let min = -Infinity;
//     let word;
//     for (let i = 0; i < str.length; i++) {
//         var bag = "";
//         for (let j = i; j < str.length; j++) {
//             bag += str[j];
//             let x = palindrome(bag);
//             if (x == true) {
//                 if (bag.length > min) {
//                     min = bag.length;
//                     word = bag;
//                 }
//             }
//         }
//     }
  
//     if (min > 2) {
//         return word;
//     } else {
//         return "none";
//     }
// }

// function palindrome(bag) {
//     let str1 = "";
//     for (let k = bag.length - 1; k >= 0; k--) {
//         str1 += bag[k];
//     }
//     if (str1 == bag) {
//         return true;
//     }
//     return false;
// }

// // Example usage
// console.log(SearchingChallenge("hellosannasmith")); // Output: sannas
// console.log(SearchingChallenge("abcdefgg"));        // Output: none


// // Matrix Challenge
// function MatrixChallenge(strArr) {
//   const matrix = strArr.map(row => JSON.parse(row));
//   const numRows = matrix.length;
//   const numCols = matrix[0].length;
//   let result = [];

//   let top = 0, bottom = numRows - 1, left = 0, right = numCols - 1;

//   while (top <= bottom && left <= right) {
//       // Traverse right
//       for (let i = left; i <= right; i++) {
//           result.push(matrix[top][i]);
//       }
//       top++;

//       // Traverse down
//       for (let i = top; i <= bottom; i++) {
//           result.push(matrix[i][right]);
//       }
//       right--;

//       // Traverse left
//       if (top <= bottom) {
//           for (let i = right; i >= left; i--) {
//               result.push(matrix[bottom][i]);
//           }
//           bottom--;
//       }

//       // Traverse up
//       if (left <= right) {
//           for (let i = bottom; i >= top; i--) {
//               result.push(matrix[i][left]);
//           }
//           left++;
//       }
//   }

//   return result.join(',');
// }

// // Test cases
// console.log(MatrixChallenge(["[1, 2]", "[10, 14]"])); // Output: 1,2,14,10
// console.log(MatrixChallenge(["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"])); // Output: 4,5,6,5,2,9,2,4,5,1,1,2


// // Example 1:

//  event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
// // Output: true
// // Explanation: The two events intersect at time 2:00.
// // Example 2:

// // Input: event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
// // Output: true
// // Explanation: The two events intersect starting from 01:20 to 02:00.
// // Example 3:

// // Input: event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
// // Output: false
// // Explanation: The two events do not intersect.

// var haveConflict = function(event1, event2) {
//     let start1 = convertTimetoMinute(event1[0])
//     let end1 = convertTimetoMinute(event1[1])
//     let start2 = convertTimetoMinute(event2[0])
//     let end2 = convertTimetoMinute(event2[1])
//      if (end1 >= start2 && start1 <= end2) {
//         return true; // Conflict
//     }
//     return false

// };
//     function convertTimetoMinute(time){
//     const [hours, minutes] = time.split(":").map(Number);
//     // console.log(hours  * 60 + minutes)
//     return hours * 60 + minutes;
//     }


// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// let count = 1
// for(let i=1;i<=4;i++){
//     let bag = "";
//     for(let j=1;j<=i;j++){
//         bag += count+" ";
//         count++;
//     }
//     console.log(bag);
// }

// // 2,4,8,32,…. 
// // Please print this series, you have just 2 as first input
// let amul = 2;
// for(let i=1;i<=10;i++){
//     console.log(amul);
//     amul = amul * 2
// }

// // Input: reverseWords("Hello world! This is a test.")
// // Output: "olleH !dlrow sihT si a .tset"

function reverseWords(){
    let bag = [];
    let words = str.split(" ");
    for(let i=0;i<words.length;i++){
        p = words[i].split("").reverse().join("");
        bag.push(p)
    }
    console.log(bag.join(""));
}
reverseWords()

// groupByAge
function groupByAge(people){
    let obj = {};
    for(let person of people){
        let {name, age} = person;
        if(!obj[age]){
            obj[age] = [];
        }
        obj[age].push(name)
    }
    console.log(obj);
}
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Carol", age: 25 },
    { name: "David", age: 30 }
];
groupByAge(people)

// * 
// * * 
// * * * 
// * * * * 
// * * * * *   print this
for(let i=1;i<=5;i++){
  let bag = "";
  for(let j=1;j<=i;j++){
    bag += "*"+" ";
  }
  console.log(bag)
}

// Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
// Output: true
// Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
// Hence, we return true.
// Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
// Output: false
// Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
// Hence, we return false.

function checkValid(){
  for(let i=0;i<matrix.length;i++){
    let row = new Set();
    let col = new Set();
    for(let j=0;j>matrix.length;j++){
      row.add(matrix[i][j]);
      col.add(matrix[j][i]);
    }
    if(row.size !== matrix.length || col.size !== matrix.length){
      return false;
    }
  }
  return true;
}

// Example 1:

// Input: nums = [4,7,9,3,9], divisors = [5,2,3]
// Output: 3
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 5.
// The divisibility score of divisors[1] is 1 since nums[0] is divisible by 2.
// The divisibility score of divisors[2] is 3 since nums[2], nums[3], and nums[4] are divisible by 3.
// Since divisors[2] has the maximum divisibility score, we return it.
// Example 2:

// Input: nums = [20,14,21,10], divisors = [5,7,5]
// Output: 5
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 2 since nums[0] and nums[3] are divisible by 5.
// The divisibility score of divisors[1] is 2 since nums[1] and nums[2] are divisible by 7.
// The divisibility score of divisors[2] is 2 since nums[0] and nums[3] are divisible by 5.
// Since divisors[0], divisors[1], and divisors[2] all have the maximum divisibility score, we return the minimum of them (i.e., divisors[2]).
// Example 3:

// Input: nums = [12], divisors = [10,16]
// Output: 10
// Explanation: The divisibility score for every element in divisors is:
// The divisibility score of divisors[0] is 0 since no number in nums is divisible by 10.
// The divisibility score of divisors[1] is 0 since no number in nums is divisible by 16.
// Since divisors[0] and divisors[1] both have the maximum divisibility score, we return the minimum of them (i.e., divisors[0]).

var maxDivScore = function(nums, divisors) {
  let max = -Infinity;
  let maxDivisor = -Infinity;
  for(let i=0;i<divisors.length;i++){
    let count = 0;
    for(let j=0;j<nums.length;j++){
      if(nums[j] % divisors[i] == 0){
        count++;
      }
    }
    if(count > max){
      max = count;
      maxDivisor = divisors[i]
    }
    else if(count === max){
      maxDivisor = Math.min(maxDivisor, divisors[i])
    }
  }
  return maxDivisor
};

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
const strStr = function(haystack, needle){
  return haystack.indexOf(needle)
}

// Example 1:
// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:
// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:
// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
var repeatedNTimes = function(nums) {
  let obj = {};
  for(let i=0;i<nums.length;i++){
      if(obj[nums[i]] === undefined){
          obj[nums[i]] = 1;
      }
      else{
          obj[nums[i]]++;
      }
  }
  let max = -Infinity;
  let num;
  for(let key in obj){
      if(obj[key] > max){
          max = obj[key];
          num = key
      }
  }
  return num
};

// Define a variable
var myVariable = [1, 2, 3, 4, 5];
// Check if myVariable is an array
if (Array.isArray(myVariable)) {
    console.log("myVariable is an array.");
} else {
    console.log("myVariable is not an array.");
}

// Reverse Bits
// Example 1:
// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
// Example 2:
// Input: n = 11111111111111111111111111111101
// Output:   3221225471 (10111111111111111111111111111111)
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.
function reverseBit(){
  let res = n.toString().split("");
  let num = 32 - res.length;
  for(let i=0;i<num;i++){
    res.unshift("0")
  }
  let ans = res.reverse().join("");
  return parseInt(ans, 2);
}


// Sort Colors
// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]
for(let i=0;i<n;i++){
  for(let j=i;j<n;j++){
    if(nums[i] > nums[j]){
      let temp = nums[i];
      nums[i] = num[j];
      nums[j] = temp;
    }
  }
}
return nums


// Question 2: Write a function factorial that calculates the factorial of a given number.
// Test Case:
console.log(factorial(5));  // Expected Output: 120
console.log(factorial(0));  // Expected Output: 1
console.log(factorial(10)); // Expected Output: 3628800
function factorial(num){
    let pro = 1;
    for(let i=num;i>=1;i--){
        pro = pro * i
    }
    return pro
}
