var arr = [13,43,5232,323,432,61,7,9,1.22,4.3333]
var arr1 = ['a','e','s','y','b','a','r']
// 插入排序算法
Array.prototype.insertionSort = function(){ 
    console.time("插入排序")
    var arr = this,
        len = this.length,
        e,
        temp; 
    for (var i = 1; i < len; i++) {
        //寻找元素arr[i]的合适的插入位置
        // for(var j = i; j > 0 && arr[j] < arr[j-1]; j--){
        //     temp = arr[j];
        //     arr[j] = arr[j-1];
        //     arr[j-1] = temp;
        // }
        //插入排序优化
        e = arr[i]
        var j;//j保存元素e应该插入的位置
        for(j = i; j > 0 && arr[j-1] > e; j--){
            arr[j] = arr[j-1];
        }
        arr[j] = e;
    }
    console.timeEnd("插入排序")
    return arr
}
console.log(arr.insertionSort());
console.log(arr1.insertionSort());