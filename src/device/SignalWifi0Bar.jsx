import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalWifi0Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalWifi0Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></g>);
	}

}