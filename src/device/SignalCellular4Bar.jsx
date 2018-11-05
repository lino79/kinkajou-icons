import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellular4Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellular4Bar';
	}

	renderSVG() {
		return (<g><path d="M2 22h20V2z"/></g>);
	}

}