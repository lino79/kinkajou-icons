import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ExposureNeg1 extends SvgIcon {

	static get is() {
		return 'material.image.ExposureNeg1';
	}

	renderSVG() {
		return (<g><path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"/></g>);
	}

}