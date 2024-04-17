function wiggleSort(nums) {
  nums.sort((a, b) => a - b);
  const middle = Math.ceil(nums.length / 2);
  const smallerHalf = nums.slice(0, middle);
  const largerHalf = nums.slice(middle);

  const result = [];
  for (let i = 0; i < middle; i++) {
    result.push(smallerHalf[i]);
    if (i < largerHalf.length) {
      result.push(largerHalf[i]);
    }
  }

  return result;
}

// console.log(wiggleSort([3, 6, 7, 9, 5, 2, 5, 7]));
