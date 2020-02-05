/**
 * Convert an integer to roman number
 * @param {integer} num Integer representation of number
 */
convertToRoman = (num) => {
  // The number has to be divided from the heighest
  // For that reason, the heighest benchmark should be first in the array
	const romanBenchMark = [
    ['(C)', 100000],
    ['(X)(C)', 90000],
  	['(L)', 50000],
    ['(X)(L)', 40000],
    ['(X)', 10000],
    ['M(X)', 9000],
    ['(V)', 5000],
    ['M(V)', 4000],
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]
  let romanNumber = '', leftover = num

  romanBenchMark.forEach(benchMark => {
    // Don't do any actions if leftover is zero
    if (!leftover) return;
    // Number of occurance of a purticular roman letter
    let frequency = Math.floor(leftover / benchMark[1])
    // Repeat the same character until it gets another division
    romanNumber += benchMark[0].repeat(frequency)
    // Update the number with remaining value yet to be divided
    leftover = leftover - frequency * benchMark[1]
  })
  return romanNumber;
}
