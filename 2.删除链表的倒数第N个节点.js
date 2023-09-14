function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let head = new ListNode(list[0]);
let curNode = head;

list.forEach((item, index) => {
  if (index === 0) return;
  curNode.next = new ListNode(item);
  curNode = curNode.next;
});
let n = 7;

let length = 0;
curNode = head;
while (true) {
  length = length + 1;
  curNode = curNode?.next;
  if (!curNode) break;
}

curNode = head;
for (let i = 1; i < length - n; i++) {
  curNode = curNode.next;
}
curNode.next = curNode.next?.next;

console.log(head)

