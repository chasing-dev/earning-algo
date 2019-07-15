<?php
/**
 * @param string $s
 * @param string $t
 * @param int $pos
 * @return bool
 * @name:若主串中存在和子串值相同的子串 则返回他在主串种第pos个字符后第一次出现的位置
 * @author: weikai
 * @date: 2019/7/12 12:09
 */
function index(string $s,string $t,int $pos)
{
    $n = strlen($s);
    $m = strlen($t);
    $i = $pos;
    if ($pos <1 || $pos >$n){
        return false;
    }
    while ( $i <= $n-$m+1) {
        $sub = substr($s,$i,$m);
        if (strcmp($sub,$t) !== 0) {
            $i++;
        }else {
            return $i;
        }
    }
    return 0;
}

echo index('hellophp','php',1);
echo "<br/>";
echo index('hello php','php',3);
echo "<br/>";
echo index('hello php','phpa',3);