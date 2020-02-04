/**
 * 4. 回文字符串
 * 可以删除一个字符，判断是否能构成回文字符串
 * 680. Valid Palindrome II (Easy)
 * @param {string} str
 */
function getPalindrome(str) {
  const isPalindrome = function (str, i, j) {
    if (!str) return false
    while (i < j) {
      const charI = str.charAt(i++)
      const charJ = str.charAt(j--)
      if (charI !== charJ) {
        return false
      }
    }
    return true
  }
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      return isPalindrome(str, i++, j) || isPalindrome(str, i, j--)
    }
  }
  return true
}

const str = 'abca'
const ret = getPalindrome(str)
console.log(ret)
