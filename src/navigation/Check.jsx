import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Check extends SvgIcon {

	static get is() {
		return 'material.navigation.Check';
	}

	renderSVG() {
		return (<g><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></g>);
	}

}