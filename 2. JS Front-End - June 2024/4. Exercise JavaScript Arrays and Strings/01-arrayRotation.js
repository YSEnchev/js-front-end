function arrayRotation(arr, rotations) {
  const cutOfIndex = rotations % arr.length;

  const leftSide = arr.slice(0, cutOfIndex);
  const rightSide = arr.slice(cutOfIndex);

  const result = rightSide.concat(leftSide);

  console.log(result.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);
