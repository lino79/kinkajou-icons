import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellular0Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellular0Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M2 22h20V2z"/></g>);
	}

}