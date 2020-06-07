import builders from 'webscript';
import { createElement } from 'webscript/dist/createDOMElement.js';

export namespace WebScript
{
	function createKuudereElement(tagName: string, props: { [key: string]: any }, ...children: any[]): HTMLElement
	{
		const element: HTMLElement = createElement(tagName, props, ...children);
		if (props.$listeners != null && typeof props.$listeners === 'object')
		{
			const listeners = props.$listeners;
			Object.keys(listeners).forEach((key: string): void =>
			{
				if (typeof listeners[key] === 'function')
					element.addEventListener(key, (e: Event): void =>
						listeners[key](element, e));
				else
					listeners[key].forEach((f: (el: HTMLElement, e: Event) => void): void =>
						element.addEventListener(key, (e: Event): void => f(element, e)))
			});
		}
		return element;
	}

	export function HTML(): { [key: string]: any; }
	{
		return new Proxy
		({}, {
			get(target, tag: string): any
			{
				if (target[tag] != null) return target[tag];
				const [tagBuilder] = builders(createKuudereElement, tag);
				target[tag] = tagBuilder;
				return target[tag];
			}
		});
	}
}
