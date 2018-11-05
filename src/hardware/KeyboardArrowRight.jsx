import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class KeyboardArrowRight extends SvgIcon {

	static get is() {
		return 'material.hardware.KeyboardArrowRight';
	}

	renderSVG() {
		return (<g><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/></g>);
	}

}