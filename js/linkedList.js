
function LinkedList(){
  var Node = function (elem){
    this.elem = elem;
    this.next = null;
  }
  var head = null;
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
      }
  }
  this.append = function(elem){
    var node = new Node(elem), current;
    if(head === null){
      head = node;
    } else {
      var tail = getTailNode(head);
      tail.next = node;
    }
    length++;
  }
  this.unshift = function(elem){
    var node = new Node(elem), current;
    if(head === null){
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    length++;
  }
  this.insert = function(position, elem){
    if(position >= 0 && position <= length){
      var node = new Node(elem);
      var index = 0, current =head;
      if(position === 0){
        this.unshift(elem);
      } else {
        while(index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
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
      let current = head;
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
    console.log(length);
    return length;
  }
  this.toString = function(){
    console.log(JSON.stringify(head));
  }
}

var link = new LinkedList();
link.append('12');
link.append('33');
link.append('33');
link.append('33');
link.append('33');
link.append('33');
link.unshift('unshift');
link.insert(2, 'insert');
link.remove('insert')
link.removeAt(0);
link.size();
link.toString();
