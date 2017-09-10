var maxProfit = function(arr) {
  var resultArr = [];
  for (var firstComparisonNum in arr) {
    for (var i = firstComparisonNum; i < arr.length; i++) {
      if (arr[firstComparisonNum] < arr[i]) {
        resultArr.push(arr[i] - arr[firstComparisonNum]);
      }
    }
  }
  if (resultArr[0]) {
    resultArr.sort(function(a, b) {
      return b - a;
    })
    return resultArr[0];
  }
    return -1;
}

module.exports = maxProfit;