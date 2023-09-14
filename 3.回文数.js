/**
 * @link https://leetcode.cn/problems/palindrome-number/
 */

/**
 * result 1
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || x && x%10 === 0)return false
    let x2 = x, res = 0;
    while(x2){
        res = res * 10 + x2 % 10;
        x2 = ~~(x2 / 10);
    }
    return res === x;
};

/**
 * result 2
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const charList = String(x).split('');
    return Number(charList.reverse().join('')) === x;
};