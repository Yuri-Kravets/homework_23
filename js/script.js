/*(function(arg) {
  let a = arg;
    function sum(value) {


    }
}

)();
*/
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






/*function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
  func1('fgfgf',34,'qwerty');
  */