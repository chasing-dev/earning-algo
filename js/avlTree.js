// AVL树类
var AvlTree = function(){
  // 节点类
  var Node = function(key){
    this.key =  key || '';
    this.left = null;
    this.right = null;
  }
  // 树的根节点
  var root = null;
  /**
   * 插入节点辅助方法
   * @param {Node} node
   * @param {String | Number} key
   */
  function insert(node,key){
    var newNode = new Node(key);
    // 判断当前节点放在左边还是右边
    if(node.key < key){
      if(node.right === null){
        node.right = newNode;
      } else {
        node.right = insert(node.right, key);
      }
    }
    if(node.key > key){
      if(node.left === null){
        node.left = newNode;
      } else {
        node.left = insert(node.left, key);
      }
    }
    node = balance(node,key);
    return node;
  }

  /**
   * 计算子树最大深度
   * @param {Node} node 
   */
  function heightNode(node){
    if(node === null){
      return -1;
    } else {
      return Math.max(heightNode(node.left), heightNode(node.right)) + 1;
    }
  }
  function rotate2L(node){
    // 新建一个等于当前根节点的节点
    var newNode = new Node(node.key);
    // 新节点的左节点等于当前根节点的左节点
    newNode.left = node.left;
    // 新节点的右节点等于当前节点的右节点的左节点
    newNode.right = node.right.left;
    // 当前节点的右节点的左节点等于新节点
    node.right.left = newNode;
    // 当前节点等于当前节点的右节点
    node = node.right;
    // 当前节点的右节点的左节点等于新节点
    return node;
  }
  function rotate2R(node){
    // 新建一个等于当前根节点的节点
    var newNode = new Node(node.key);
    // 新节点的左节点等于当前节点的左节点的右节点
    newNode.left = node.left.right;
    // 新节点的右节点等于当前节点的右节点
    newNode.right = node.right;
    // 当前节点等于当前节点的左节点
    node = node.left;
    // 当前节点的右节点等于新节点
    node.right = newNode;
    return node;
  }
  /**
   * 平衡操作
   * @param {Node} node 
   * @param {String|Number} key
   * @returns {Node}
   */
  function balance(node,key){
    // 计算平衡因子
    var balanceFactor = heightNode(node.left) - heightNode(node.right);
    // 左子树偏多，则右旋转
    if(balanceFactor > 1){
      console.log('right');
      // 如果key大于当前节点左节点key，则先对当前节点左节点左旋转
      if(key > node.left.key){
        node.left = rotate2L(node.left);
      }
      node = rotate2R(node);
    }
    if(balanceFactor < -1){
      console.log('left');
      if(key < node.right.key){
        node.right = rotate2R(node.right);
      }
      node = rotate2L(node);
    }
    return node;
  }
  /**
   * 删除节点的平衡逻辑
   * 
   */
  function balanceRemove(node){
    // 计算平衡因子
    var balanceFactor = heightNode(node.left) - heightNode(node.right);
    // 左子树偏多，则右旋转
    if(balanceFactor > 1){
      node = rotate2R(node);
    }else if(balanceFactor < -1){
      node = rotate2L(node);
    } else {
      if(node.left !== null){
        balanceRemove(node.left);
      }
      if(node.right !== null){
        balanceRemove(node.right);
      }
    }
    return node;
  }
  /**
   * 插入节点方法
   * @param {String | Number} key
   */
  this.insertNode = function(key){
    // 如果根节点为空，直接将节点赋值给根
    if(root === null){
      root = new Node(key);
    } else{
      root = insert(root, key);
    }
  }
    // 移除一个节点
    var findMinNode = function(node){
      while(node && node.left !== null){
        node = node.left;
      }
      return node;
    }
    var removeNode = function(node, key){
      if(node === null){
        return null;
      }
      if(key < node.key){
        node.left = removeNode(node.left, key);
        return node;
      } else if(key > node.key){
        node.right = removeNode(node.right, key);
        return node;
      } else {
        if(node.left === null && node.right === null){
          node = null;
          return node;
        }
        if(node.left === null){
          node = node.right;
          return node;
        }
        if(node.right === null){
          node = node.left;
          return node;
        }
        var aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        // 执行平衡操作
        node = balanceRemove(node);
        return node;
      }
    }
    this.remove = function(key){
      // console.log("!!");
      // console.log(root);
      root = removeNode(root, key);
    }
  this.print = function(){
    console.log(root);
    console.log("******************************");
    console.log(JSON.stringify(root));
  }
}

var tree = new AvlTree();
// 左旋
// tree.insertNode(23);
// tree.insertNode(12);
// tree.insertNode(33);
// tree.insertNode(44);
// tree.insertNode(55);
// tree.insertNode(66);

// 右旋
// tree.insertNode(55);
// tree.insertNode(44);
// tree.insertNode(33);
// tree.insertNode(22);
// tree.insertNode(11);

// 先右后左
// tree.insertNode(23);
// tree.insertNode(12);
// tree.insertNode(33);
// tree.insertNode(44);
// tree.insertNode(55);
// tree.insertNode(66);
// tree.insertNode(67);
// tree.insertNode(60);

//先左后右
tree.insertNode(55);
tree.insertNode(44);
tree.insertNode(33);
tree.insertNode(22);
tree.insertNode(18);
tree.insertNode(10);
tree.insertNode(15);
tree.insertNode(9);
tree.remove(18);
// tree.remove(44);
tree.remove(55);
tree.remove(33);
tree.print();