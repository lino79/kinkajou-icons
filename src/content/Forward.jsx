import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Forward extends SvgIcon {

	static get is() {
		return 'material.content.Forward';
	}

	renderSVG() {
		return (<g><path d="M12 8V4l8 8-8 8v-4H4V8z"/></g>);
	}

}