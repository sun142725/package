module.exports = {
    // 数组去重
    removeRepeat: function (arr){
        return arr.filter(function(v, i, self){
            return self.indexOf(v) === i
        })
    },
    // 数组乱序
    upsetArr: function (arr){
        return arr.sort(function(){
            return Math.random() - 0.5
        })
    },
    //  最大值
    maxArr: function (arr) {
        return Math.max.apply(null, arr)
    },
    //  最小值
    minArr: function (arr) {
        return Math.min.apply(null, arr)
    },
    //  数组求和
    sumArr: function (arr) {
        return arr.reduce(function(pre,cur){
            return pre + cur
        })
    },
    //  求平均值
    covArr: function (arr) {
        return this.sumArr(arr) / arr.length
    },
    //  随机取一个值
    randomOne: function (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    },
    //  获取某个值和字符串出现的位置
    getEleCount: function(arr, v){
        var num = 0;
        for(var i = 0; i<arr.length; i++){
            if(v === arr[i]){
                num++
            }
        }
        return num
    },
    //  获取对象数组的某些项
    getOption: function(arr, keys){
        var newArr = []
        if(!keys){
            return arr
        }
        var _keys = keys.split(','), newArrOne = {}
        if(_keys.length === 1) {
            for(var i =0;i<arr.length;i++){
                newArr.push(arr[i][keys])
            }
            return newArr
        }
        for(var i =0;i<arr.length;i++){
            newArrOne = {}
            for(var j=0;j<keys.length;j++){
                newArrOne[_keys[j]] = arr[i][_keys[j]]
            }
            newArr.push(newArrOne)
        }
        return newArr
    },
    //  排除对象数组的某些项
    filterOption: function(arr,keys){
        var newArr = []
        var _keys = keys.split(','), newArrOne = {}
        for(var i=0;i<arr.length;i++){
            newArrOne = {}
            for(var key in arr[i]){
                // 如果key不存在keys里面，添加数据
                if(_keys.indexOf(key) === -1){
                    newArrOne[key] = arr[i][key]
                }
            }
            newArr.push(newArrOne)
        }
        return newArr
    },
    //  对象数组排序
    arrSort: function(arr, sortText){
        if(!sortText){
            return arr
        }
        var _sortText = sortText.split(',').reverse(), _arr = arr.slice(0)
        for(var i=0;i<sortText.length;i++){
            _arr.sort(function(n1,n2){
                return n1[_sortText[i]] -n2[_sortText[i]]
            })
        }
        return _arr;
    },
    //  数组扁平化
    steamroller: function(arr){
        var newArr = [],that = this
        for(var i =0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                newArr.push.apply(newArr, that.steamroller(arr[i]))
            } else {
                newArr.push(arr[i])
            }
        }
        return newArr;
    }
}