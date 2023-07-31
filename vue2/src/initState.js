import {observer} from './observer/index';

export function initState(vm) {
    let ops = vm.$options;
    if (ops.props) {
        initProps(vm, ops.props);
    }
    if (ops.data) {
        initData(vm);
    }
}

function initComputed(vm, props) {
}

function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm, vm) : data;
    //数据劫持处理
    //将data的属性代理到实例
    for (let key in data) {
        proxy(vm, '_data', key)
    }
    observer(data);
}

function proxy(vm, sourceKey, key) {
    Object.defineProperty(vm, key, {
        get() {
            return vm[sourceKey][key]
        },
        set(newValue) {
            vm[sourceKey][key] = newValue
        }
    })
}

function initMethods(vm, props) {
}

function initProps(vm, props) {
}

function initWatch(vm, props) {
}
