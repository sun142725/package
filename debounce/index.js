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


// function throttle(func, wait) {
//     let timeout;
//     return function() {
//         let context = this;
//         let args = arguments;
//         if (!timeout) {
//             timeout = setTimeout(() => {
//                 timeout = null;
//                 func.apply(context, args)
//             }, wait)
//         }

//     }
// }
