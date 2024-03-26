const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function inputSum(accumulator, value) {
    return accumulator + value;
  }
  
  const totalBatteries = batteryBatches.reduce(inputSum, 0);
  
  console.log(totalBatteries)