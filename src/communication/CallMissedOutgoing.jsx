import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class CallMissedOutgoing extends SvgIcon {

	static get is() {
		return 'material.communication.CallMissedOutgoing';
	}

	renderSVG() {
		return (<g><path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/></g>);
	}

}