export function observer(data) {
	if (typeof data !== 'object' || data === null) {
		return data;
	}
	return new Observer(data);
}
class Observer {
	constructor(val) {
		this.walk(val);
	}
	/**
	 * Walk through each property and convert them into
	 getter/setters. This method should only be called when
	 value type is Object.
	 */
	walk(data) {
		const keys = Object.keys(data);
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			defineReactive(data, key, data[key]);
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
			console.log('getter');
			return value;
		},
		set(newValue) {
			console.log('set');
			if (newValue === value) return;
			observer(newValue);
			value = newValue;
		}
	});
}
