type Partial<T> =
{
	[K in keyof T]?: T[K];
}

interface JsDomNode
{
	'': string;
	$?: { [key: string]: string };
	_?:
	{
		listeners?: { [key: string]: ((<E extends Event>(e: E) => void)|(<E extends Event>(e: E) => void))[] };
		styles?: Partial<CSSStyleRule>; 
	};
	'...'?: (JsDomNode|string|HTMLElement)[];
}

export class JsDom
{
	public children: (JsDomNode|string|HTMLElement)[] = [];

	public toHTML(): string
	{
		let toReturn: string = '';
		this.toDom().forEach((v: HTMLElement|string): void =>
		{
			if (typeof v !== 'string')
				toReturn += v.outerHTML;
			else
				toReturn += v;
		});
		return toReturn;
	}

	public toDom(): (HTMLElement|string)[]
	{
		const processChildren = (children: (JsDomNode|string|HTMLElement)[]): (HTMLElement|string)[] =>
		{
			const toReturn: (HTMLElement|string)[] = [];
			children.forEach((child: (JsDomNode|string|HTMLElement)): void =>
			{
				if (typeof child !== 'string')
				{
					if (!(child instanceof HTMLElement))
					{
						// Create an element of the specified tag [''].
						const thisElement: HTMLElement = document.createElement(child['']);
						
						// Copy attributes from the $ property onto the element.
						Object.keys(child.$ || {}).forEach((key: string): void =>
							thisElement.setAttribute(key, (<any>child).$[key] || ''));
						
						if (child._ != null)
						{
							// Add listeners from the _.listeners property.
							if (child._.listeners != null)
								Object.keys(child._.listeners).forEach((key: string): void =>
								{
									const val = child._!.listeners![key];
									if (typeof val === 'function')
										thisElement.addEventListener(key, val);
									else
										val.forEach((cb): void =>
											thisElement.addEventListener(key, cb));
								});
							else;
							
							// Add styles from the _.styles property.
							if (child._.styles != null)
								Object.keys(child._.styles).forEach((key: string): void =>
								{

								});
							else;
						}
						
						// Append the elements children to it.
						if (child['...'] != null)
						{
							const thisElementChildren: (HTMLElement|string)[] = processChildren(child['...']);
							thisElementChildren.forEach((v: HTMLElement|string): void =>
							{
								if (typeof v !== 'string')
									thisElement.appendChild(v);							
								else
									thisElement.innerHTML += v;
							});
						}
						toReturn.push(thisElement);
					}
					else toReturn.push(child);
				}
				else toReturn.push(child);
			});
			return toReturn;
		};
		return processChildren(this.children);
	}

	public appendTo(el: HTMLElement): void
	{
		const toAppend: (HTMLElement|string)[] = this.toDom();
		toAppend.forEach((v: HTMLElement|string): void =>
		{
			if (typeof v !== 'string') el.appendChild(v);
			else el.innerHTML += v;
		});
	}

	constructor(from: (JsDomNode|string|HTMLElement)[])
	{
		this.children = from;
	}
}