var arr = ['abc','abcd','sss','2','d','t','2','ss','f','22','d'];
//定义一个新数组
(function (){
var s = [];
//遍历数组
for(var i = 0;i < arr.length;i++){
    if(s.indexOf(arr[i]) == -1){
        s.push(arr[i]);
    }
}
console.log(arr);
console.log(s);
} ())

//方法二
//借助indexOf()方法判断此元素在该数组中首次出现的位置下标与循环的下标是否相等
function rep2(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
            arr.splice(i,1);//删除数组元素后数组长度减1后面的元素前移
            i--;//数组下标回退
        }
    }
    return arr;
}
var a1 = rep2(arr);
console.log(arr);
console.log(a1);
console.log(arr);











