import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Reply extends SvgIcon {

	static get is() {
		return 'material.content.Reply';
	}

	renderSVG() {
		return (<g><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></g>);
	}

}