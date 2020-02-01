/**
 * 3. 反转元音字符
 * 345. Reverse Vowels of a String (Easy)
 * @param {string} str
 */
function getReverseVowels(str) {
  const isVowels = function (char) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    return vowelsList.indexOf(char) !== -1
  }
  if (!str) return null
  let i = 0, j = str.length - 1, ret = []
  while (i <= j) {
    const charI = str.charAt(i)
    const charJ = str.charAt(j)
    if (!isVowels(charI)) {
      ret[i++] = charI
    } else if (!isVowels(charJ)) {
      ret[j--] = charJ
    } else {
      ret[i++] = charJ
      ret[j--] = charI
    }
  }
  return ret.join('')
}

const str = 'LeetCode'
const ret = getReverseVowels(str)
console.log(ret)
