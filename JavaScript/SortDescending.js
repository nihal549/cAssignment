function mergeSortDescending(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const leftSorted = mergeSortDescending(left);
    const rightSorted = mergeSortDescending(right);
    return mergeDescending(leftSorted, rightSorted);
  }
  
  function mergeDescending(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] >= right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  

  const myArray = [4, 2, 7, 1, 9, 5];
  const sortedArray = mergeSortDescending(myArray);
  console.log(sortedArray); 
  