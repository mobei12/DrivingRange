import { initState } from './initState';
import { compileToFunction } from './compiler/index';
export function initMixin(Vue) {
	Vue.prototype._init = function (options) {
		let vm = this;
		vm.$options = options;
		//各种数据状态初始化
		initState(vm);
		if (vm.$options.el) {
			vm.$mount(vm.$options.el);
		}
	};
	Vue.prototype.$mount = function (el) {
		const vm = this;
		el = document.querySelector(el);
		const options = vm.$options;
		if (!options.render) {
			const template = options.template;
			if (!template && el) {
				//获取html tag
				el = el.outerHTML;
				console.log(el);
				const ast = compileToFunction(el);
			}
		}
	};
}
