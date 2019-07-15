<?php
/**
 * @name:kmp模式查找 若主串中存在和子串值相同的子串 则返回他在主串种第pos个字符后第一次出现的位置
 * @author: weikai
 * @date: 2019/7/12 14:21
 */


function kmp(string $t,string $p,array &$next)
{
    $n = strlen($t); // 获取长度
    $m = strlen($p);
    makeNext($p,$next); // 计算模式匹配表

    for ($i = 0, $q = 0; $i < $n; ++$i)
    {
        while($q > 0 && $p[$q] != $t[$i]) {
            $q = $next[$q - 1];
        }
        if ($p[$q] == $t[$i])
        {
            $q++;
        }
        if ($q == $m)
        {
            printf("子串在主串中位置为:%d ",($i - $m + 1));
            printf(" 子串为:%s\n", $p);
            echo "<br>";
        }
    }
}
function makeNext(string $p, array &$next)
{
    $m = strlen($p);
    $next[0] = 0;//第一位的前缀和后缀都是空集 共有长度为0
    for ($q = 1, $k = 0; $q < $m; ++$q)
    {
        while($k > 0 && $p[$q] != $p[$k]){
            $k = $next[$k-1];
        }
        //如果第q位和第k位相等 第q位的共有长度就等于k++
        if ($p[$q] == $p[$k])
        {
            $k++;
        }
        $next[$q] = $k;
    }
    /**
     * abcdabc
     * 循环第一遍a位和b位的共有长度都是0
     * 循环第二遍c位的共有元素长度为0
     * 循环第三遍d位的共有元素长度为0
     * 循环第四遍$p[$q] == $p[$k]成立$k=1 子串第5位的元素a共有元素长度为1
     * 循环第五遍$k > 0 && $p[$q] != $p[$k] 不成立 $p[$q] == $p[$k] 成立 k++ 子串第6位的元素b共有元素长度为2
     * 循环第六遍$k > 0 && $p[$q] != $p[$k] 成立 $k向前退格 上一位元素的共有元素长度 位 $k > 0 && $p[$q] != $p[$k] 再次成立 $K继续向前退 字串第7位元素d共有元素长度位0
     */
    printf("next表为:\n");
    for ($i = 0; $i < strlen($p); ++$i) {
        printf("%d ", $next[$i]);
    }
    echo "<br>";
}
$next = [];
$t = "ababxbababcadfdsssabcdabdrwgewwrabcdabd";
$p = "abc";

printf("主串为: %s\n", $t);
echo "<br>";
printf("子串为: %s\n", $p);
echo "<br>";

kmp($t, $p, $next); // 计算部分匹配表和字符串匹配算法

