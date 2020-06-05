# Kuudere

// TODO: README

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