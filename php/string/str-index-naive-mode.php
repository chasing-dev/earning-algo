<?php
/**
 * @name:朴素模式查找 若主串中存在和子串值相同的子串 则返回他在主串种第pos个字符后第一次出现的位置
 * @author: weikai
 * @date: 2019/7/12 12:56
 */
function index(string $s, string $t, int $pos)
{

    if ($pos <1 || $pos >strlen($s)){
        return false;
    }
    $j = 0;
    $i = $pos-1;
    while ($i < strlen($s) && $j < strlen($t)){
        //对比俩个字符串的第一位字符如果相等就对比第二位...不想等就回退到上次匹配首位的下一位
        if ($s[$i] == $t[$j]){
            $i++;
            $j++;
        }else{
            $i = $i-$j+1;
            $j = 0;//回退到子串的首位
        }

    }
    if ($j > strlen($t)-1){
        return $i-strlen($t)+1;
    }else{
        return 0;
    }
}

echo index('google','le',1);
echo "<br/>";
echo index('google','go',1);
echo "<br/>";
echo index('google','e',3);