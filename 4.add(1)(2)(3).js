/**
 * 请实现一个 add 函数，满足以下功能
 *
 * add(1); 	// 1
 * add(1)(2);  	// 3
 * add(1)(2)(3)；  // 6
 * add(1)(2, 3);   // 6
 * add(1, 2)(3);   // 6
 * add(1, 2, 3);   // 6
 */

/**
 * result 1
 * 存在一些问题，需要多一次无参调用
 */
let paramsList = [];
const add = (...arg) => {
  paramsList = [...paramsList, ...arg];
  return arg.length ? add : paramsList.reduce((x, y) => x + y, 0);
};

console.log(add(1, 2, 3)());
console.log(add(1, 2)(3)());
console.log(add(1)(2)(3)());
