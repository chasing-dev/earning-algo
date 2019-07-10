<?php 
/**
 * 线性表的顺序存储结构
 */

class seqList{

    private $seq_list; //顺序表

    /**
     * 顺序表初始化
     * 
     * @param mixed $seq_list
     * @return void
     */
    public function __construct($seq_list=[]){
    	$this->seq_list = $seq_list;
    }

    /**
     * 清空顺序表
     * 
     * @return void
     */
    public function __destruct(){
        unset($this->seq_list);
    }

    /**
     * 判断顺序表是否为空
     *
     * @return bool 为空返回true，否则返回false
     */
    public function listEmpty(){
        return empty($this->seq_list);
    }

    /**
     * 返回顺序表元素个数
     *
     * @return int
     */
    public function listLength(){
    	return count($this->seq_list);
    }
    
    /**
     * 返回顺序表中下标为i的元素值
     * 
     * @param int i 
     * @return mixed 如找到返回元素值，否则返回false
     */
    public function getElem($i){
        if ($i > 0 && $i <= $this->listLength()) {
        	return $this->seq_list[$i-1];
        }else{
        	return false;
        }
    }

    /**
     * 在顺序表中查找与给定值 $value 相等的元素,
     *
     * @param mixed $value
     * @return mixed 查找成功，返回该元素在表中序号，否则返回 0
     */
    public function locateElem($value){
    	if (in_array($value, $this->seq_list)) {
    		$i = 0;
            foreach ($this->seq_list as $key=>$val) {
            	if (strcmp($value, $val) === 0){
            		//若存在多个元素与匹配值相等
            		if ($i == 0) {
            			$i = $key + 1;
            		}else{
                        $i .= ",".($key + 1);
            		}
            	}
  
            }
            return $i;

    	}else{
    		return false;
    	}
    }

    /**
     * 在指定位置 i 插入一个新元素 $value
     *
     * @return bool 插入成功返回 true, 否则返回 false
     */
    public function listInsert($i, $value){
        if ($i > $this->listLength()+1 || $i < 1) {
        	return false;
        }elseif ($i == $this->listLength()+1) {
        	$this->seq_list[$i-1] = $value;
        }else{
        	//从 $i-1 到最后的元素位置向后移动一位
            for ($k = $this->listLength()-1; $k >= $i-1; $k--) {
                $this->seq_list[$k+1] = $this->seq_list[$k];
            }
            $this->seq_list[$i-1] = $value;
        }

        return true;
    }

    /**
     * 删除顺序表中 i 位置的元素， 并用 $value 返回其值
     * 
     * @return mixed 删除成功返回 $value，否则返回 false
     */
    public function listDelete($i){
        if ($i <= 0 || $i > $this->listLength()) {
        	return false;
        }else{
        	$value = $this->seq_list[$i-1];
        	for ($k=$i-1; $k < $this->listLength()-1; $k++) { 
        		$this->seq_list[$k] = $this->seq_list[$k+1];
        	}
        	unset($this->seq_list[$this->listLength()-1]);

        	return $value;        	
        }
    }

}