import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellularConnectedNoInternet0Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellularConnectedNoInternet0Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/></g>);
	}

}