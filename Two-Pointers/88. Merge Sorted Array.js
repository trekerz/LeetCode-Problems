/**
 * 5. 归并两个有序数组
 * 把归并结果存到第一个数组上
 * 88. Merge Sorted Array (Easy)
 * @param {Array} arr1
 * @param {Array} arr2
 */
function getSortedArray(arr1, arr2) {
  // 三个尾指针
  let p1 = arr1.length - 1,
    p2 = arr2.length - 1,
    p = arr1.length + arr2.length - 1
  while (p1 >= 0 && p2 >= 0) {
    arr1[p--] = arr1[p1] > arr2[p2] ? arr1[p1--] : arr2[p2--]
  }
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }
  // 表示将arr2数组从下标0位置开始，拷贝到arr1数组中，从下标0位置开始，长度为p2+1
  arrayCopy(arr2, 0, arr1, 0, p2 + 1);
  return arr1
}

const arr1 = [2, 4, 7]
const arr2 = [1, 6, 8, 10]
const ret = getSortedArray(arr1, arr2)
console.log(ret)
