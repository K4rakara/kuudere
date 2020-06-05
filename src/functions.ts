import { Component } from './component';
import { Arguments, HTMLKuudereComponent } from './interfaces';

/*
export function constructComponent<A, B extends Component<A>>
(
	tag: string,
	component: new (el: HTMLKuudereComponent<A, B>, args: Arguments<A>) => B,
	args: Arguments<A>
): HTMLKuudereComponent<A, B>
{
	const el: HTMLKuudereComponent<A, B> = <any>document.createElement(tag);
	el.__props = new Component<A>(el, args);
	return el;
}
*/

export function constructComponent<Cst, Cpt extends Component<Cst>>
(
	tag: string,
	component: new (el: HTMLKuudereComponent<Cpt>, args: Arguments<Cst>) => Cpt,
	args: Arguments<Cst>,
): HTMLKuudereComponent<Cpt>
{
	const el: HTMLKuudereComponent<Cpt> = <any>document.createElement(tag);
	el.__props = new component(el, args);
	return el;
}