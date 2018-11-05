import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ArrowDownward extends SvgIcon {

	static get is() {
		return 'material.navigation.ArrowDownward';
	}

	renderSVG() {
		return (<g><path fill="#010101" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></g>);
	}

}