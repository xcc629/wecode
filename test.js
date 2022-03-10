function checkeven(){
    const evenArray = []
    for(let num = 1; num <= 50; num ++){
      num % 2 === 0 ? evenArray.push(num) : 0
  }
  return evenArray;}