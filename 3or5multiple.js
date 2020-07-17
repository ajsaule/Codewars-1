function solution(number){
  let multiplesOf3or5 = []

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesOf3or5.push(i)
    }
  }

  return multiplesOf3or5.reduce((accum, elem) => accum + elem, 0)
}