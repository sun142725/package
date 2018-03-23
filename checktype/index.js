module.exports = function(str, type){
    swich (type) {
        case 'email':
            return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
        case 'phone':
            return /^1[3|4|5|7|8|9][0-9]{9}$/.test(str)
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
        case 'number':
            return /^[0-9]$/.test(str)
        case 'english':
            return /^[a-zA-Z]+$/.test(str)
        case 'text':
            return /^\w+$/.test(str)
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str)
        case 'lower':
            return /^[a-z]+$/.test(str)
        case 'upper':
            return /^[A-Z]+$/.test(str)
        default:
            return arguments[2].test(str) || true
    }
}