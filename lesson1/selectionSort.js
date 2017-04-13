var arr = [13,43,5232,323,432,61,7,9,1.22,4.3333]
var arr1 = ['a','e','s','y','b','a','r']
// 选择排序算法
Array.prototype.selectionSort = function(){  
    console.time("选择排序")
    var arr = this,
        len = this.length,
        temp,
        minIndex;
    for(var i = 0; i < len - 1; i ++){
        minIndex =  i;
        for(var j = i + 1; j < len; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    console.timeEnd("选择排序")
    return arr
}
console.log(arr.selectionSort());
console.log(arr1.selectionSort());