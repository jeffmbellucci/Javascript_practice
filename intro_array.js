Array.prototype.myUniq = function() {
   var output = [];

   for (var i = 0; i < this.length; i++) {
      if (output.indexOf(this[i]) === -1) {
         output.push(this[i]);
      }
   }
   return output;
}

// var arr = [1,1,5,5,4,3,2,5,6,7,7,7];
// console.log(arr.myUniq());

Array.prototype.twoSum = function() {
   var output = [];

   for (var i = 0; i < this.length; i++) {
      for (var j = i + 1; j < this.length; j++) {
         if (this[i] + this[j] === 0) {
            output.push([i, j]);
         }
      }
   }
   return output;
}

// var arr2 = [1,1,0,0,2,-1,-2];
// console.log(arr2.twoSum());

Array.prototype.transpose = function() {
   var transposed = [];

   for (var i = 0; i < this[0].length; i++) {
      transposed.push([]);
   }

   for (var i = 0; i < this.length; i++) {
      for (var j = 0; j < this[i].length; j++) {
         transposed[j][i] = this[i][j];
      }
   }
   return transposed;
}

// var arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arr3.transpose());

function multiplyByTwo(array) {
   var multipleArray = [];

   for (var i = 0; i < array.length; i++) {
      multipleArray.push(array[i] * 2);
   }
   return multipleArray;
}

// var multiples = multiplyByTwo([1, 2, 3, 4]);
// console.log(multiples);

Array.prototype.myEach = function(name) {
   for (var i = 0; i < this.length; i++) {
      name(this[i]);
   }
}

function multiplybyFour(number) {
   return number * 4;
}
// var p = [1, 2, 3, 4];
// p.myEach(console.log);

function add(value, value2) {
   return value + value2;
}

Array.prototype.myMap = function(name) {
   var mapped = [];

   function map(obj) {
      mapped.push(name(obj));
   }

   this.myEach(map);

   return mapped;
}

// var y = [1, 2, 3, 4];
// var z = y.myMap(multiplybyFour);
// console.log(z);

Array.prototype.inject = function(name) {
   var output = this[0]

   function inj(obj) {
      output = name(output, obj);
   }

   this.slice(1, this.length).myEach(inj);

   return output;
}
var strings = ["hi", "my name is", "Jeff"];
var jeff = [1,2,3,4,5];
console.log(jeff.inject(add));
console.log(strings.inject(add));



