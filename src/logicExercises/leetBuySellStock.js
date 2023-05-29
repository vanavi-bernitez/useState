// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
var maxProfit = function(prices) {
    let buyDay = 0; 
    let sellDay = 1; //moves to the right always 
    let realProfit = 0;
    while (sellDay < prices.length) {
      if (prices[buyDay] < prices[sellDay]) {
        let currentProfit = prices[sellDay] - prices[buyDay]; 
        realProfit = Math.max(realProfit, currentProfit);       
      } else {
        buyDay = sellDay;
      }
      sellDay += 1;
    }
    return realProfit;
};


// var maxProfit = function(prices) {
//     const maxElement = Math.max(...prices); //spread operator pass the array elements as individual arguments
//     const minElement = Math.min(...prices);

//     const maxNumberIndex = prices.indexOf(maxElement);
//     const minNumberIndex = prices.indexOf(minElement);

//     if (maxNumberIndex > minNumberIndex) return maxElement - minElement;
//     return 0   
// };

console.log(maxProfit([7,1,5,3,6,4]));





