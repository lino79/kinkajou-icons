import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ExpandMore extends SvgIcon {

	static get is() {
		return 'material.navigation.ExpandMore';
	}

	renderSVG() {
		return (<g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></g>);
	}

}