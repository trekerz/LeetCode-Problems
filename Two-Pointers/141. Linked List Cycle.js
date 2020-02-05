/**
 * 6. 判断链表是否存在环
 * 141. Linked List Cycle (Easy)
 * @param {Array} arr1
 * @param {Array} arr2
 */
function hasCycle(head) {
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

// 链表构造器
function ListNode(val, next) {
  this.val = val
  this.next = next || null
}
let head = p = new ListNode()
for (let i = 0; i < 5; i++) {
  if (i === 4) {
    // 循环链表
    p.next = head
  } else {
    p.next = new ListNode(i)
    p = p.next
  }
}
const ret = hasCycle(head)
console.log(ret)
