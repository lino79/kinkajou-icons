import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ExposurePlus1 extends SvgIcon {

	static get is() {
		return 'material.image.ExposurePlus1';
	}

	renderSVG() {
		return (<g><path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"/></g>);
	}

}