import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellularConnectedNoInternet4Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellularConnectedNoInternet4Bar';
	}

	renderSVG() {
		return (<g><path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/></g>);
	}

}