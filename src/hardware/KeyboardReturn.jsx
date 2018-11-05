import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class KeyboardReturn extends SvgIcon {

	static get is() {
		return 'material.hardware.KeyboardReturn';
	}

	renderSVG() {
		return (<g><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/></g>);
	}

}