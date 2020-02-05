//www.syamsp.com
convertToRoman = (num) => {
	const romanBenchMark = [
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
  	let frequency = Math.floor(leftover / benchMark[1])
    romanNumber += benchMark[0].repeat(frequency)
  	leftover = leftover - frequency * benchMark[1]
  })

  return romanNumber;
}

console.log(convertToRoman(36))
