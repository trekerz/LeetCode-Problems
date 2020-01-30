/**
 * 1. 有序数组twoSum
 * 167. Two Sum II - Input array is sorted (Easy)
 * @param {number[]} numbers
 * @param {number} target
 */
function twoSum(numbers, target) {
  if (!numbers) return null
  let i = 0, j = numbers.length - 1
  while (i < j) {
    const ret = numbers[i] + numbers[j]
    if (ret === target) {
      return [numbers[i], numbers[j]]
    } else if (ret > target) {
      j--
    } else {
      i++
    }
  }
  return null
}

const numbers = [2, 7, 9, 9, 21, 34]
const target = 23
const ret = twoSum(numbers, target)
console.log(ret)
