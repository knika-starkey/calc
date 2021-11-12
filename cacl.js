function calc() {
  let x1 = prompt("input x1");
  let x2 = prompt("input x2");
  let sign = prompt("input sign");
  let f;
  let functionStr =
    "f = function(x1, x2, sign ){return " + x1 + sign + x2 + " ;}";
  eval(functionStr);
  alert(f(x1, x2, sign));
  //let sqr = new Function("x1, x2, sign", "return x1 sign x2");
  //return sqr(x1, x2, sign);
}

calc();
