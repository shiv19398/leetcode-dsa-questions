// You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.

// Notice that x does not have to be an element in nums.

// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

 

// Example 1:
// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.


// Brute force method
// var specialArray = function(nums) {
//     let count;
//     for(let i=nums.length;i>=1;i--){
//         count=0;
//         for(let j=0;j<nums.length;j++){
//             if(nums[j]>=i){
//                 count++;
//             }
//         }

//         if(count===i){
//             return i;
//         }
//     }

//     return -1;
// };

// medium approach
//Sort the array so that we can apply binary search to it which will reduce our search by log(n).
// function binarySearch(arr, target){
//     let low=0, high=arr.length-1;
//     let ans = -1;
//     while(low<=high){
//         let mid = Math.floor(low + (high-low)/2);
//         if(arr[mid]>= target){
//             ans = mid;
//             high= mid-1;
//         }

//         else{
//             low = mid+1;
//         }
//     }

//     return ans;
// }

// var specialArray = function(arr){
//     let count;

//     arr.sort((a,b)=>a-b);

//     for(i=arr.length;i>=1;i--){
//         count=0;

//         let index = binarySearch(arr,i);
//         count = arr.length-index;

//         if(count===i)  return count;

//     }

//     return -1;
// }

// let result =specialArray([3,6,7,7,0]);
// console.log(result);

//top approach
//we can make use of counting sort and prefix sum.
//create a array of size nums.length+1 and fill it with zero.
//store the frequency of each element in the freq array and if nums[i]>nums.length, then store it in freq[nums.length] to have a track of all the numbers greater than the length of the array.
//Iterate over the array again and start storing the suffix sum 
//for any index, if prefix sum becomes equal to index that is our result.
//if not returned yet, return -1.
var specialArray = function(nums){
    const freq= new Array(nums.length+1);
    freq.fill(0)

    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums.length){
            freq[nums.length]++;
        }else{

            freq[nums[i]]++;
        }
    }

    let suffixSum=0;

    for(i=freq.length-1;i>=0;i--){
        suffixSum += freq[i];

        if(suffixSum === i){
            return i;
        }
    }

    return -1;
}

const result = specialArray([0,3,6,7,0]);
console.log(result);