function reverseAnArrayOfNumbers(count, numbers) {
  let result = numbers.slice(0, count).reverse().join(' ')

  console.log(result)
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])
