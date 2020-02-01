/**
 * 2. 两数平方和
 * 633. Sum of Square Numbers
 * @param {number} target
 */
function getPowSum(target) {
  if (target < 0) return null
  let i = 0, j = Math.floor(Math.sqrt(target))
  while (i < j) {
    const powSum = i * i + j * j
    if (powSum === target) {
      return [i, j]
    } else if (powSum > target) {
      j--
    } else {
      i++
    }
  }
  return null
}

const target = 80
const ret = getPowSum(target)
console.log(ret)
