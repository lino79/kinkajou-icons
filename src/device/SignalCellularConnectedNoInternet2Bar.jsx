import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellularConnectedNoInternet2Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellularConnectedNoInternet2Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/></g>);
	}

}