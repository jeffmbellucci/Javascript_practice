function range(start, end) {
   if (start === end) {
      return [end];
   }
   return [start].concat(range(start + 1, end))
   // var prev = range(start, end - 1);
//    prev.push(end);
//    return prev;
}

// console.log(range(2, 12));

Array.prototype.sum = function() {
   var total = 0;
   for (var i = 0; i < this.length; i++) {
      total += this[i];
   }
   return total;
}

Array.prototype.recursivesum = function() {
   if (this.length === 1) {
      return this[0];
   }
   return this[this.length - 1] + this.slice(0, this.length - 1).recursivesum();
}

// var arr = [1, 2, 3, 100];
// console.log(arr.recursivesum());

function exp(base, power) {
   if (power === 0) {
      return 1;
   }
  return base * exp(base, power - 1);
}

function exp2(base, power) {
   if (power === 0) {
      return 1;
   }
   if (power % 2 === 0) {
      return exp2(base, power / 2) * exp2(base, power / 2);
   }
   else {
      return base * (exp2(base, (power - 1) / 2) * exp2(base, (power - 1) / 2));
   }
}

// console.log(exp2(2,5));
function fibs(num) {
   if (num === 1) {
      return [1]
   }
   else if (num === 2) {
      return [0, 1]
   }

   var prev = fibs(num -1);
   return prev.concat(prev[prev.length - 2] + prev[prev.length - 1]);
}

function fibsit(num) {
   if (num === 1) {
      return [0];
   }
   else if (num === 2) {
      return [0, 1];
   }
   else {
      var output = [0, 1];
      for (var i = 0; i < num - 2; i++) {
         output = output.concat(output[i] + output[i + 1]);
      }
      return output;
   }
}
// console.log(fibsit(6));

function binarySearch(array, target) {
   var mid = Math.floor(array.length / 2)

   if (array[mid] === target){
      return mid;
   }
   else if (array.length === 1) {
      return null;
   }
   else if (array[mid] < target) {
      var arr = array.slice(mid + 1);
      var res = binarySearch(arr, target);
      // NOTE: ternary doesn't work here; leaving to play around with...??
      // var value = res ? mid + 1 + res : null;
      // return value;
      if (res === null) {
         return null;
      }
      else {
         return mid + 1 + res;
      }
   }
   else {
      var arr = array.slice(0, mid);
      return binarySearch(arr, target);
   }
}

// var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
// console.log(binarySearch(myArray, 20));

function makeChange (amount, coins) {
   var output = [];
   for (var i = 0; i < coins.length; i++) {
      if (coins[i] <= amount) {
         var fit = Math.floor(amount / coins[i]);
         var remainder = amount - (fit * coins[i]);
         for (var j = 0; j < fit; j++) {
            output.push(coins[i]);
         }

      }
   }

}