import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class PlusOne extends SvgIcon {

	static get is() {
		return 'material.social.PlusOne';
	}

	renderSVG() {
		return (<g><path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4zm4.5-1.92V7.9l2.5-.5V18h2V5z"/></g>);
	}

}