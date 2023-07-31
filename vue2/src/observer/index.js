import {ArrayMethods} from "./arr";

export function observer(data) {
    if (typeof data !== 'object' || data === null) {
        return data;
    }
    return new Observer(data);
}

class Observer {
    constructor(val) {
        Object.defineProperty(val, '__ob__', {
            enumerable: false,
            value: this//缓存实例的指向，方便后面调用observer的函数和方法
        })
        //判断数据类型，做不同的处理
        if (Array.isArray(val)) {
            val.__proto__ = ArrayMethods
            this.observeArray(val)
        } else {
            this.walk(val);
        }
    }

    /**
     * 遍历每个属性并将它们转换为
     * getter / setter。此方法应仅在以下情况下调用
     * 取值类型为Object。
     */
    walk(data) {
        const keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            defineReactive(data, key, data[key]);
        }
    }

    observeArray(val) {
        for (let i = 0; i < val.length; i++) {
            observer(val[i])
        }
    }
}

/**
 * @description 劫持对象属性
 * @param data {object} 要劫持的对象
 * @param key {string}  对象的key
 * @param value {any}  对象的key对应的值
 */
export function defineReactive(data, key, value) {
    let childOb = observer(value); //递归劫持
    Object.defineProperty(data, key, {
        get() {
            return value;
        }, set(newValue) {
            if (newValue === value) return;
            observer(newValue);
            value = newValue;
        }
    });
}
