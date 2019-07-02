function Queue(){
  let items = [];
  this.enqueue = function(elem){
    items.unshift(elem);
  }
  this.dequeue = function(){
    return items.pop();
  }
  this.front = function(){
    return items[items.length - 1];
  }
  this.isEmpty = function(){
    return items.length === 0;
  }
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    return items.toString();
  }
}

let a = new Queue();
a.enqueue('hello');
a.enqueue('world');
console.log("队列长度：" + a.size());
console.log("出队列操作：" + a.dequeue());
console.log("队列长度：" + a.size());
console.log("是否为空：" + a.isEmpty());
console.log("出队列操作：" + a.dequeue());
console.log("是否为空：" + a.isEmpty());
console.log("出队列操作：" + a.dequeue());
console.log("是否为空：" + a.isEmpty());
console.log(a.print());
