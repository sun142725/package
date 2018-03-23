//('2018/7/4 16:0:0')
module.exports = function (endTime) {
    var start = new Date()
    var end = new Date(endTime)
    var t = end.getTime() - end.getTime()
    var time = {d:0,h:0,m:0,s:0}
    if(t>0){
        time.d = Math.floor(t / 1000 / 3600 / 24)
        time.h = Math.floor(t / 1000 / 3600 % 24)
        time.m = Math.floor(t / 1000 / 60 % 60)
        time.s = Math.floor(t / 1000 % 60)
    }
    return time
}