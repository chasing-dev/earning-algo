function Stack(){
  var items = [];
  this.push = function(elem){
    items.push(elem);
  }
  this.pop = function(){
    return items.pop();
  }
  this.peek = function(){
    return items[items.length - 1];
  }
  this.isEmpty = function(){
    return items.length === 0;
  }
  this.clear = function(){
    items.length = 0;
  }
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    return items.toString();
  }
}
let a = new Stack();
a.push('hello');
a.push('world');
console.log(a.size());
console.log(a.print());
console.log("栈顶元素：" + a.peek());
console.log("出栈操作：" + a.pop());
console.log("当前栈元素个数：" + a.size());
console.log("当前栈：" + a.print());
