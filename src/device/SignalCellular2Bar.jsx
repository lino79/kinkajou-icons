import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellular2Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellular2Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/></g>);
	}

}