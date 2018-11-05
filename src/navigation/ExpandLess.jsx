import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ExpandLess extends SvgIcon {

	static get is() {
		return 'material.navigation.ExpandLess';
	}

	renderSVG() {
		return (<g><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></g>);
	}

}