/**
 * 7. 最长子序列
 * 524. Longest Word in Dictionary through Deleting (Medium)
 * @param {string} s 源字符串
 * @param {string[]} d 结果字典
 */
function getLongestWord(s, d) {
  const isSubStr = function (src, dest) {
    if (!src || !dest) return false
    let i = j = 0
    while (i < src.length && j < dest.length) {
      if (src.charAt(i) === dest.charAt(j)) {
        j++
      }
      i++
    }
    return j === dest.length
  }
  let longestWord = ''
  for (let i = 0, l = d.length; i < l; i++) {
    if (
      longestWord.length > d[i].length ||
      (longestWord.length === d[i].length && longestWord.localeCompare(d[i]) < 0)
    ) {
      continue
    }
    if (isSubStr(s, d[i])) {
      longestWord = d[i]
    }
  }
  return longestWord
}

const s = 'poeapprlvse'
const d = ['apple', 'monkey', 'pears']
const ret = getLongestWord(s, d)
console.log(ret)
