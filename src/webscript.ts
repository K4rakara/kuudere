//*ifdef FEATURE-WEBSCRIPT

import builders from 'webscript';
import { createElement } from 'webscript/dist/createDOMElement.js';

export namespace WebScript
{
	export function HTML(): { [key: string]: any; }
	{
		return new Proxy
		({}, {
			get(target, tag: string): any
			{
				if (target[tag] != null) return target[tag];
				const [tagBuilder] = builders(createElement, tag);
				target[tag] = tagBuilder;
				return target[tag];
			}
		});
	}
}

//*endif