
class ListNode {
       val: number
       next: ListNode | null
       constructor(val?: number, next?: ListNode | null) {
           this.val = (val===undefined ? 0 : val)
           this.next = (next===undefined ? null : next)
       }
 }
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head;
    let p = head;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        if (!head) {
            head = new ListNode(sum % 10);
            p = head;
        } else {
            p.next = new ListNode(sum % 10);
            p = p.next;
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head;
}



// @lc code-end

