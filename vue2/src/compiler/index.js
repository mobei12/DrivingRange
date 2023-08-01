/**
 * @description 解析html
 * @param {object} el  dom outerHTML
 */
export function compileToFunction(el) {
	const ast = parseHTML(el);
}
const unicodeRegExp =
	/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
//属性
const attribute =
	/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const dynamicArgAttribute =
	/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
//标签名
const ncname = '[a-zA-Z_][\\-\\.0-9_a-zA-Z' + unicodeRegExp.source + ']*';
//
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
//标签开头
const startTagOpen = new RegExp('^<' + qnameCapture);
//标签结束;
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
const doctype = /^<!DOCTYPE [^>]+>/i;
const comment = /^<!\--/;
const conditionalComment = /^<!\[/;
const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
/**
 * @description 解析方法
 * @param @param {object} html  dom outerHTML
 */
function parseHTML(html) {
	while (html) {
		const textEnd = html.indexOf('<');
		//判断标签
		if (textEnd === 0) {
			const startTagMatch = parseStartTag();
		}
	}
	function parseStartTag() {}
}
