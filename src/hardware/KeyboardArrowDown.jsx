import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class KeyboardArrowDown extends SvgIcon {

	static get is() {
		return 'material.hardware.KeyboardArrowDown';
	}

	renderSVG() {
		return (<g><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></g>);
	}

}