/**
 * @link https://leetcode.cn/problems/implement-trie-prefix-tree/
 * 要充分利用js语言特性，直接将对应字符作为索引，不要一提到树形结构就用数组实现；C语言实现也会使用Vector实现
 */


var TreeNode = function () {
  this.curVal = null;
  this.parent = null;
  this.childs = [];
  return this;
};

var Trie = function () {
// 共同的始祖节点，零级节点
  this.trieTree = new TreeNode();
  // 创建第一个一级节点（单字母）
  this.trieTree.childs.push(new TreeNode());
  this.curNode = this.trieTree.childs[0];
  this.nextNode = null;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  word.split().reduce((preVal = "", curVal) => {
    const curStr = `${preVal}${curVal}`;
    this.curNode.curVal = curStr;
    this.curNode.childs.push(new TreeNode());
    this.nextNode = this.curNode.childs.length-1;
    this.nextNode.parent = this.curNode;
    this.curNode = this.nextNode;
  });
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {};


Trie.prototype.print = function () {
    this.trieTree
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
