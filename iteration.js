Array.prototype.bubble_sort = function () {
   var output = this.slice(0, this.length);
   var unsorted = true;
   while (unsorted) {
      unsorted = false;
      for (var i = 0; i < output.length - 1; i++) {
         if (output[i] > output[i + 1]) {
            var temp = output[i];
            output[i] = output[i + 1];
            output[i + 1] = temp;
            unsorted = true;
         }
      }
   }
   return output;
}


var x = [3,5,4,67,8,2,3,1,2,2,3,4,87,34,23];
console.log(x.bubble_sort());

String.prototype.substrings = function () {
   var substrings = [];
   for (var i = 0; i < this.length; i++) {
      for (var j = i; j < this.length; j++) {
         substrings.push(this.slice(i, j + 1));
      }
   }
   return substrings;
}
console.log("dictionary".substrings());