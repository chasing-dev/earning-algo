var DoubleLinkList = function(){
    var Node = function(elem){
        this.elem = elem;
        this.prev = null;
        this.next = null;
    }
    var head = tail = null,
    length = 0;

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
        }
    }
    this.append = function(elem){
        var node = new Node(elem);
        if(head){
            tail = getTailNode(head);
            tail.next = node;
            node.prev = tail;
        } else {
            head = tail = node;
        }
        length++;
    }
    this.unshift = function(elem){
        var node = new Node(elem);
        if(head){
            tail = getTailNode(head);
            node.next = head;
            head.prev = node;
            head = node;
        } else {
            head = tail = node;
        }
        length++;
    }
    this.insert = function(position, elem){
        if(position >= 0 && position <= length){
            var node = new Node(elem);
            if(position === 0){
                this.unshift(elem);
            } else if(position === length){
                this.append(elem);
            } else {
                var nodeObj = getNodeAt(position, head);
                var currentNode = nodeObj.current;
                var previousNode = nodeObj.prev;
                node.prev = previousNode;
                node.next = currentNode;
                previousNode.next = node;
                currentNode.prev = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    this.indexOf = function(elem){
        var index = 0, current = head;
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
            var previous, current = head, index = 0;
            if(position === 0){
                head = current.next;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return true;
        }
        return false;
    }
    this.remove = function(elem){
        var position = this.indexOf(elem);
        this.removeAt(position);
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

var dbLink = new DoubleLinkList();
dbLink.append('11');
dbLink.append('22');
dbLink.append('33');
dbLink.unshift('unshift');
dbLink.insert(1, 'insert');
dbLink.removeAt(2);
dbLink.remove('22');
var link = dbLink.print();
console.log("头结点：" + link.elem);
console.log("头结点的前一个节点：" + link.elem.prev);
console.log("头结点的下一个节点（第二个节点）：" + link.next.elem);
console.log("第二个节点的前一个节点（头结点）：" + link.next.prev.elem);
console.log("第二个节点的下一个节点（第三个节点）：" + link.next.next.elem);
console.log("22的索引:" + dbLink.indexOf('22'));
// console.log("尾结点：" + link.next.next.next.elem);

console.log("当前链表长度:" + dbLink.size());