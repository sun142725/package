module.exports = function(fn, delay){
    var timer = null
    return function(){
        var that = this;
        var arg = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(that, arg)
        }, delay)
    }
}