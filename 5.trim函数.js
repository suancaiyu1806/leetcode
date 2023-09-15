/**
 * 请实现一个 trim 函数，删除字符串左右两侧的空格
 */

String.prototype.mytrim = function () {
  return this.replace(/^\s*/, "").replace(/\s*$/, "");
};

console.log(' string '.mytrim())