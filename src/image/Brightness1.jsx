import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Brightness1 extends SvgIcon {

	static get is() {
		return 'material.image.Brightness1';
	}

	renderSVG() {
		return (<g><circle cx="12" cy="12" r="10"/></g>);
	}

}