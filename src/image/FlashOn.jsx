import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FlashOn extends SvgIcon {

	static get is() {
		return 'material.image.FlashOn';
	}

	renderSVG() {
		return (<g><path d="M7 2v11h3v9l7-12h-4l4-8z"/></g>);
	}

}