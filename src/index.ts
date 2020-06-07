export * from './functions';
import * as functions from './functions';
export * from './interfaces';
import { Component } from './component';
export { Component } from './component';
import { JsDom } from './jsdom';
export { JsDom } from './jsdom';
import { WebScript } from './webscript';
export { WebScript } from './webscript';

declare global
{
	interface Window
	{
		kuudere?: any;
	}
}

if (!(self.kuudere != null))
{
	self.kuudere =
	{
		Component: Component,
		JsDom: JsDom,
		WebScript: WebScript,
		constructComponent: functions.constructComponent,
	};
}
