<?php
/**
 * Created by PhpStorm.
 * @name:节点
 * @author: weikai
 * @date: 2019/7/1 15:23
 */
class Node
{
    /**
     * 数据元素
     * @var
     */
    public $item;


    /**
     * 后继节点
     * @var
     */
    public $next;

    /**
     * Node constructor.
     * @param $item
     */
    public function __construct($item)
    {
        $this->item = $item;
        $this->next = null;
    }
}

/**
 * Class DoubleLink
 * @name:单链表
 * @author: weikai
 * @date: 2019/7/1 23:04
 */
class SingleList
{
    /**
     * 头节点
     * @var
     */
    private $head;

    /**
     * SingleLink constructor.
     */
    public function __construct()
    {
        $this->head = null;
    }

    /**
     * 链表是否为空
     * @return bool
     */
    public function isEmpty()
    {
        return is_null($this->head);
    }

    /**
     * 链表长度
     * @return int
     */
    public function length()
    {
        $cur = $this->head;
        $count = 0;
        while(!is_null($cur)){
            $count++;
            $cur = $cur->next;
        }
        return $count;
    }

    /**
     * 遍历整个链表
     */
    public function traver()
    {
        $cur = $this->head;
        $tmp = [];

        while (!is_null($cur)) {
            array_push($tmp,$cur->item);
            $cur = $cur->next;
        }
        return $tmp;
    }

    /**
     * 链表头部添加元素
     * @param $item
     */
    public function add($item)
    {
        $node = new Node($item);
        if($this->isEmpty()){
            $this->head = $node;
        }else{
            //待插入节点后继节点为原本头节点
            $node->next = $this->head;
            //待插入节点变为头节点
            $this->head = $node;
        }
    }


    /**
     * 链表尾部添加元素
     * @param $item
     */
    public function append($item)
    {
        $node = new Node($item);
        if($this->isEmpty()){
            $this->head = $node;
        }else{
            //移动到尾节点
            $cur = $this->head;
            while (!is_null($cur->next)){
                $cur = $cur->next;
            }
            //原本尾节点next指向待插入节点
            $cur->next = $node;

        }
    }

    /**
     * 指定位置添加元素
     * @param $pos
     * @param $item
     */
    public function insert($pos, $item)
    {
        switch ($pos){
            //若指定位置pos为第一个元素之前，则执行头部插入
            case $pos <= 0:
                $this->add($item);
                break;
            //若指定位置超过链表尾部，则执行尾部插入
            case $pos > ($this->length() - 1):
                $this->append($item);
                break;
            //找到位置
            default:
                $node = new Node($item);
                $count = 0;
                $cur = $this->head;

                //移到指定位置的前一个位置
                while ($count < ($pos - 1)){
                    $count++;
                    $cur = $cur->next;
                }
                $node->next = $cur->next;
                $cur->next = $node;
        }
    }

    /**
     * 删除节点
     * @param $item
     */
    public function remove($item)
    {
        if($this->isEmpty()){
            return;
        }

        $cur = $this->head;
        //如果第一个就是删除的节点
        if($cur->item == $item){
            //如果只有这一个节点
            if(is_null($cur->next)){
                $this->head = null;
            }else{
                $this->head = $cur->next;
            }
            return;
        }
        $cur = $this->head;
        //找到要删除元素的前一个元素
        while ($cur->next->item != $item) {
            $cur = $cur->next;
        }
        $cur->next = $cur->next->next;

    }

    /**
     * 查找节点是否存在
     * @param $item
     * @return bool
     */
    public function search($item)
    {
        $cur = $this->head;
        while (!is_null($cur)){
            if($cur->item == $item){
                return true;
            }
            $cur = $cur->next;
        }
        return false;
    }
}

$s = new SingleList();
$s->add('a');
$s->add('b');
$s->append('c');
$s->append('d');
$s->add('e');
$s->insert(3,'2222');
echo "单链表长度".$s->length()."<br/>";
//var_dump($s->traver());
$s->remove('2222');
print_r($s->traver());