function ex5() {
  var number = document.getElementById("ex5-input-number").value * 1;
  var resultArray=[];
  
  var k = 2;
  for (var i = 1; i <= number; i++) {
    var notPrimeNumberCount = 0;
    for (k = 1; k <= i; k++) {
      if (i % k === 0) {
        notPrimeNumberCount++;
      }
    }
    if (notPrimeNumberCount === 2) {
        resultArray.push(i);
      }
  }
  document.getElementById("ex5-result").innerHTML = resultArray.join(' ');
}
