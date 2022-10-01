"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b * b - 4 * a * c;

  if (discriminant === 0) {
   let x = -b / (2 * a);
   arr.push(x);
  }
  else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  };
  return arr;
}
   
  
   