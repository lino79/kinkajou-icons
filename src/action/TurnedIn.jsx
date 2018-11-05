import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class TurnedIn extends SvgIcon {

	static get is() {
		return 'material.action.TurnedIn';
	}

	renderSVG() {
		return (<g><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></g>);
	}

}