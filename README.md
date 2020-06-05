<p align="center"><img src="./readme/kuudere-logo.svg" width="128"/></p>

# Kuudere · <a href="https://github.com/K4rakara/kuudere/blob/master/LICENSE.md">![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet)</a> <a href="https://www.npmjs.com/package/kuudere">![npm](https://img.shields.io/npm/v/kuudere?label=npm&message=&color=blueviolet)</a> <a href="#">![bundle size](https://img.shields.io/static/v1?label=bundle%20size&message=3.4kb&color=blueviolet)</a>

Kuudere is a ultra-lightweight (only *3.4kb!*) JavaScript framework that provides simple, yet powerful abstractions.

### Documentation

```ts
// TODO
```

### Example

```ts
import * as Kuudere from 'kuudere';

class App extends Kuudere.Component<null>
{
	constructor(el: HTMLKuudereComponent<ThisType<null>>, args: Kuudere.Arguments<null>)
	{
		super(el, args);

		new Kuudere.JsDom
		([
			{ '': 'div', $: { 'class': 'example-app' }, '...': [
				Kuudere.constructComponent('div', Hello, { constructor: 'world' }),
			] },
		]).appendTo(el);
	}
}

class Hello extends Kuudere.Component<string>
{
	constructor(el: HTMLKuudereComponent<ThisType<string>>, args: Kuudere.Arguments<string>)
	{
		super(el, args);
		
		new Kuudere.JsDom
		([
			{ '': 'span', $: { 'class': 'waving-hand' }, '...': [ '👋' ] },
			{ '': 'span', $: { 'class': 'hello-thing' }, '...': [ `Hello ${args.constructor}!` ] },
		]).appendTo(el);
	}
}

document.body.appendChild(Kuudere.constructComponent('div', App, { constructor: null }));
```