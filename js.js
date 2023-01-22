//1. Eliminate the Negatives
//Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

function eliminateNegatives(arr) {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          arr[i] = 0;
      }
  }
  return arr;
}

var X = [2,-1,4,-3];
console.log(eliminateNegatives(X));




///**deleting the negative elements */
const array = [2,-1,4,-3];
array.sort(function(a,b) {
   return b - a;
});
let x = array.length
for (x; x--;) {
   if ( array[x] < 0 ){
      array.pop();
   }
}
console.log(array)






//2. Number to String
// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

   function z(x) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Turing';
       }
    }
    console.log(x)
    return x;
}

let y = [1,-4,0,-1];
console.log(z(y))




  