import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class CallMade extends SvgIcon {

	static get is() {
		return 'material.communication.CallMade';
	}

	renderSVG() {
		return (<g><path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/></g>);
	}

}