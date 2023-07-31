//重写数组方法
//1、获取原数组方法
const oldArrayProtoMethods = Array.prototype
//导出重建的原型
export const ArrayMethods = Object.create(oldArrayProtoMethods)
const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
methods.forEach(function (item) {
    ArrayMethods[item] = function (...args) {
        const result = oldArrayProtoMethods[item].apply(this, args)
        const ob = this.__ob__
        let inserted
        switch (item) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if (inserted) ob.observeArray(inserted)
        return result
    }
})
