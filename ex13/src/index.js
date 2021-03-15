function randomRangeNumber(minNumber, maxNumber){
    if (randomRangeNumber >= minNumber || randomRangeNumber <= maxNumber)
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    else{
      return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }
    
  };
  console.log(randomRangeNumber(1, 12));

  module.exports = randomRangeNumber;