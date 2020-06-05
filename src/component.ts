import { HTMLKuudereComponent, Arguments } from "./interfaces";

export class Component<ConstructorInterface>
{
	constructor(el: HTMLKuudereComponent<ThisType<ConstructorInterface>>, args: Arguments<ConstructorInterface>)
	{
		// Take every value from `args.element` and set it on `el`.
		if (args.element != null)
			Object.keys(args.element).forEach((key: string): void =>
				//@ts-ignore
				{ el[key] = args.element[key]; });
		else;
		
		// For every key in the `args.listeners` object, either set a listener
		// for every callback in an array of callbacks, or set a singular callback.
		if (args.listeners != null)
			Object.keys(args.listeners).forEach((key: string): void =>
				{
					const val = args.listeners![key];
					if (typeof val === 'function')
						el.addEventListener(key, val);
					else
						val.forEach((cb): void =>
							el.addEventListener(key, cb));
				});
		else;
	}
}
