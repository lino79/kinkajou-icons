import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class KeyboardArrowLeft extends SvgIcon {

	static get is() {
		return 'material.hardware.KeyboardArrowLeft';
	}

	renderSVG() {
		return (<g><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></g>);
	}

}