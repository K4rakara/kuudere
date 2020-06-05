export * from './functions';
export * from './interfaces';
import { Component } from './component';
export { Component } from './component';
import { JsDom } from './jsdom';
export { JsDom } from './jsdom';

declare global
{
	interface Window
	{
		kuudereNoGlobal?: boolean;
		kuudere?: any;
	}
}

if (self.kuudereNoGlobal != null && self.kuudereNoGlobal && !(self.kuudere != null))
{
	self.kuudere =
	{
		Component: Component,
		JsDom: JsDom,
	};
}
