import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ArrowUpward extends SvgIcon {

	static get is() {
		return 'material.navigation.ArrowUpward';
	}

	renderSVG() {
		return (<g><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></g>);
	}

}