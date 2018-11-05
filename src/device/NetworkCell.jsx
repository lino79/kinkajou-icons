import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class NetworkCell extends SvgIcon {

	static get is() {
		return 'material.device.NetworkCell';
	}

	renderSVG() {
		return (<g><path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/></g>);
	}

}