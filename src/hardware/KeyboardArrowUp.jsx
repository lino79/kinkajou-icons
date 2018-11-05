import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class KeyboardArrowUp extends SvgIcon {

	static get is() {
		return 'material.hardware.KeyboardArrowUp';
	}

	renderSVG() {
		return (<g><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></g>);
	}

}