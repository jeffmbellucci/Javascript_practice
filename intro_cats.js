function Cat(name, owner) {
   this.name = name;
   this.owner = owner;
}

Cat.prototype.cute_statement = function() {
   return this.owner + " loves " + this.name;
}

Cat.prototype.meow = function(){
   return "MEOWW!! from" + this.name
}

var gizmo = new Cat("gizmo", "jeff");
var mittens = new Cat("mittens", "jeff");

console.log(gizmo.name);

console.log(gizmo.cute_statement());

mittens.meow = function () {
   return "moooo!";
}

console.log(gizmo.meow());
console.log(mittens.meow());

