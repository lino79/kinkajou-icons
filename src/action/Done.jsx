import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Done extends SvgIcon {

	static get is() {
		return 'material.action.Done';
	}

	renderSVG() {
		return (<g><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></g>);
	}

}