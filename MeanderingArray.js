/*
Problem Description:
An array of integers is in meandering order when the largest and smallest elements are in subsequent order. 

Example: 
Input = [-1,1,2,3,-5]
Output = [3,-5,2,-1,1]

Parameters: 
unsorted[n] = the unsorted array
int[n] = the array sorted in meandering order

Constraints:
n >= 2 and <= 10^4
unsorted[i] >= -10^6 and <= 10^6
The unsorted array may contain duplicate elements
*/

function meanderingArray(unsorted) {
    // Write your code here
    var newArray = []
    const sorted = unsorted.sort(function(a, b){return b-a})
    for(let i = 0; newArray.length <= sorted.length; i++) {
        newArray.push(sorted[i]);
        if (newArray.length === sorted.length) break;
        newArray.push(sorted[sorted.length-1-i]);
    }
    return newArray
}