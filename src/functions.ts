import { Component } from './component';
import { Arguments, HTMLKuudereComponent } from './interfaces';

export function constructComponent<Cst, Cpt extends Component<Cst>>
(
	tag: string,
	component: new (el: HTMLKuudereComponent<Cpt>, args: Arguments<Cst>) => Cpt,
	args: Arguments<Cst>,
): HTMLKuudereComponent<Cpt>
{
	const el: HTMLKuudereComponent<Cpt> = <any>document.createElement(tag);
	el.__props = new component(el, args);
	if (args.init != null) args.init(el);
	return el;
}