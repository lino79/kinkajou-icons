import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellularConnectedNoInternet3Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellularConnectedNoInternet3Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/></g>);
	}

}