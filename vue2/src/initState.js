import { observer } from './observer/index';
export function initState(vm) {
	let ops = vm.$options;
	if (ops.props) {
		initProps(vm, ops.props);
	}
	if (ops.data) {
		initData(vm);
	}
}
function initComputed(vm, props) {}
function initData(vm) {
	let data = vm.$options.data;
	data = vm._data =  typeof data === 'function' ? data.call(vm, vm) : data;
	//数据劫持处理
	observer(data);
}
function initMethods(vm, props) {}
function initProps(vm, props) {}
function initWatch(vm, props) {}
