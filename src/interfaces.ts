import { Component } from './component';

export interface HTMLKuudereComponent<Cmp extends Component<any>> extends HTMLElement
{
	__props: Cmp;
}

type Partial<T> =
{
	[K in keyof T]?: T[K];
}

export interface Arguments<T>
{
	constructor: T;
	element?: Partial<HTMLElement>;
	listeners?:
	{
		[key: string]: ((<E extends Event>(e: E) => void)|(<E extends Event>(e: E) => void))[]
	}
}
