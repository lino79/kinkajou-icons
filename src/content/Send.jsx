import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Send extends SvgIcon {

	static get is() {
		return 'material.content.Send';
	}

	renderSVG() {
		return (<g><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></g>);
	}

}