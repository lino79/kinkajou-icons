import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ArrowDropUp extends SvgIcon {

	static get is() {
		return 'material.navigation.ArrowDropUp';
	}

	renderSVG() {
		return (<g><path d="M7 14l5-5 5 5z"/></g>);
	}

}