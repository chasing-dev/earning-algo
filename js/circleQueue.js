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

function hotPotato(nameList, num){
  let queue = new Queue();
  for(let i = 0; i < nameList.length; i++){
    queue.enqueue(nameList[i]);
  }
  let eliminated = '';
  while(queue.size() > 1){
    for(let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }
  return queue.dequeue();
}
let nameLists = ['小明','小花','小芳','小白','小刚','小黑'];
let winner = hotPotato(nameLists,9);
console.log(winner + "在游戏中获得胜利！");
