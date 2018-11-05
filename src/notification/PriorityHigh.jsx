import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class PriorityHigh extends SvgIcon {

	static get is() {
		return 'material.notification.PriorityHigh';
	}

	renderSVG() {
		return (<g><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/></g>);
	}

}