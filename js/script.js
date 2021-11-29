
(function () {
  function sum (value) {
      let temp = value;
      sum = function() {
          let arg = arguments[0] ? arguments[0] : 0;
          return temp += arg;
      };
      return sum();
  }
  console.log(sum(3)); 
  console.log(sum(5));
  console.log(sum(20)); 
})();




//Разбирался как работает,оставил ,пусть валяется
/*
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
};

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2));
console.log(add5(3));  // 7
console.log(add10(2)); // 12
*/



