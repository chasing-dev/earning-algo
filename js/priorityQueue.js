function PriorityQueue(){
  let items = [];
  function QueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }
  this.enqueue = function(element, priority){
    let queueElement = new QueueElement(element, priority);
    let added = false;
    for(let i = 0; i < items.length; i++){
      if(queueElement.priority < items[i]['priority']){
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if(!added){
      items.push(queueElement);
    }
  }
  this.print = function(){
    for(let key in items){
      items[key].toString();
    }
    return items;
  }
}

let a = new PriorityQueue();
a.enqueue('hello', 2);
a.enqueue('hello', 2);
a.enqueue('hello', 2);
a.enqueue('world', 3);
a.enqueue('!', 1);
a.enqueue('!', 1);
console.log(a.print());
