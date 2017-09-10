var maxProfit = function(arr) {
  var resultArr = [];
  for (var firstComparisonNum in arr) {
    for (var i = firstComparisonNum; i < arr.length; i++) {
      // console.log(arr[firstComparisonNum], arr[i])
      if (arr[firstComparisonNum] < arr[i]) {
        resultArr.push(arr[i] - arr[firstComparisonNum])
      }
    }
  }
  console.log(resultArr)

    //compare arr[counter + 1] minus arr[counter] and return result if it's a positive number
    //create variable to store result
    //replace variable if arr[2] minus arr[0] is higher number
    //continue loop
    //push result to new array
    // move counter for outer loop += 1
    //arr[counter + 1] - arr [counter], etc.
  //sort result array and return newArr[0]
  //if newArr[0] < 1 then return -1
}

maxProfit([45, 24, 35, 31, 40, 38, 11]);

module.exports = maxProfit;