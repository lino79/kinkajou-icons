import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class CallReceived extends SvgIcon {

	static get is() {
		return 'material.communication.CallReceived';
	}

	renderSVG() {
		return (<g><path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/></g>);
	}

}