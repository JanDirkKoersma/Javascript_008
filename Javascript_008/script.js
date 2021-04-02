const big = function (number1) {
    const number = number1;
    if (number > 100) {
      return "true";
    }
    return "false";
  };
  
  const result1 = big(101);
  console.log(result1);
  
  const maximum = function (people1) {
    const number = people1;
    if (number < 1000) {
      return "come in";
    }
    return "it's too busy now, come back later";
  };
  
  const result2 = maximum(991);
  console.log(result2);




var nums = [2, 10, 9, 6, 12, 3];
var totalSum = 0;
for (var i in nums) {
  totalSum += nums[i];
}

var numsCnt = nums.length;

var average = totalSum / numsCnt;

console.log("Average is: " + average);
