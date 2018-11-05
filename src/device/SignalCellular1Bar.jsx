import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SignalCellular1Bar extends SvgIcon {

	static get is() {
		return 'material.device.SignalCellular1Bar';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/></g>);
	}

}