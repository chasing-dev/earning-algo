
// 单向
var CircleLinkList = function(){
    var Node = function (elem){
        this.elem = elem;
        this.next = null;
      }

    var head = tail = null;
    var length = 0;

    function getTailNode(node){
      while(node.next && node.next !== head){
        node = node.next;
      }
      return node;
    }

    function getNodeAt(position, node){
      var index = 0, previous;
      while(index++ < position){
        previous = node;
        node = node.next;
      }
      return {
        current: node,
        prev: previous
      };
    }

      this.append = function(elem){
        var node = new Node(elem);
        if(head === null && tail === null){
          head = tail = node;
        } else {
          tail = getTailNode(head);
          tail.next = node;
          node.next = head;
        }
        length++;
      }
      this.unshift = function(elem){
        var node = new Node(elem);
        if(head === null && tail === null){
          head = tail = node;
        } else {
          tail = getTailNode(head);
          node.next = head;
          head = node;
          tail.next = head;
        }
        length++;
      }
      this.insert = function(position, elem){
        if(position >= 0 && position <= length){
          let node = new Node(elem);
    
          if(position === 0){
            this.unshift(node);
          } else if(position === length){
            this.append(node);
          } else {
            var nodeObj = getNodeAt(position, head);
            var currentNode = nodeObj.current;
            var prevNode = nodeObj.prev;
            prevNode.next = node;
            node.next = currentNode;
          }
          length++;
          return true;
        } else {
          return false;
        }
      }
      this.indexOf = function(elem){
        let current = head,
        index = 0;
        while(current){
          if(current.elem === elem){
            return index;
          }
          index++;
          current = current.next;
        }
        return -1;
      }
      this.removeAt = function(position){
        if(position > -1 && position < length){
          let current = head,
          previous,
          index = 0;
          if(position === 0){
            head = current.next;
          } else {
            while(index++ < position){
              previous = current;
              current = current.next;
            }
            previous.next = current.next;
          }
          length--;
          return current.elem;
        }
      }
      this.remove = function(elem){
        let index = this.indexOf(elem);
        return this.removeAt(index);
      }
      this.isEmpty = function(){
        return length === 0;
      }
      this.size = function(){
        return length;
      }
      this.print = function(){
        console.log(head);
        return head;
      }
}

var circleLinkList = new CircleLinkList();
circleLinkList.append('22');
circleLinkList.append('33');
circleLinkList.append('44');
circleLinkList.unshift('before');
circleLinkList.insert(2, 'two');
circleLinkList.removeAt(1);
circleLinkList.remove('33');
// circleLinkList.insert(0, 'one');
let list = circleLinkList.print();
console.log(list.elem);
console.log(list.next.elem);
console.log(list.next.next.elem);
console.log(list.next.next.next.elem);
console.log(list.next.next.next.next.elem);
console.log(list.next.next.next.next.next.elem);
console.log(list.next.next.next.next.next.next.elem);
console.log(list.next.next.next.next.next.next.next.elem);
console.log(list.next.next.next.next.next.next.next.next.elem);
console.log(circleLinkList.indexOf('before'));
console.log(circleLinkList.indexOf('two'));
console.log("当前链表长度：" + circleLinkList.size());