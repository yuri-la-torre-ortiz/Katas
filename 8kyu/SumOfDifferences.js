Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).


function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0;
    let newArray = [];
    let sum = 0;
    arr = arr.sort((a,b) => {
       return b-a
       })
    for(let i = 0; i < arr.length; i++) {
      if (i > 0 && i < arr.length -1) {
           newArray.push(arr[i])
      }
     }
     arr = arr.concat(newArray).sort((a,b) => {
       return b-a
       })
       arr.forEach((number, index) => {
       index%2 === 0? sum += number : sum -= number
     })
    return sum
}