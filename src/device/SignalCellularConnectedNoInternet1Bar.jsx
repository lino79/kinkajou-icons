import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellularConnectedNoInternet1Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellularConnectedNoInternet1Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"/></g>);
	}

}