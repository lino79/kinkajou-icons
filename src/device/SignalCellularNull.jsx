import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellularNull extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellularNull';
	}

	renderSVG() {
		return (<g><path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/></g>);
	}

}