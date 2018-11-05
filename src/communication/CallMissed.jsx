import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class CallMissed extends SvgIcon {

	static get is() {
		return 'material.communication.CallMissed';
	}

	renderSVG() {
		return (<g><path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/></g>);
	}

}