console.log("vasya");

function tickets(peopleInLine){
  let num100Bills = 0
  let num50Bills = 0
  let num25Bills = 0
  
  let enoughChange = "YES"
  for (let i = 0; i < peopleInLine.length; i++) {
    const bill = peopleInLine[i];
    
    if (bill === 25) {
      num25Bills++

    } else if (bill === 50 && num25Bills > 0) {
      num25Bills--
      num50Bills++

    } else if (bill === 100) {
      if (num50Bills > 0 && num25Bills > 0) {
        num25Bills--
        num50Bills--
        num100Bills++
      } else if (num25Bills >= 3) {
        num25Bills -= 3
        num100Bills++
      } else {
        enoughChange = "NO"
        break
      }

    } else {
      enoughChange = "NO"
      break
    }
  }

  return enoughChange
}