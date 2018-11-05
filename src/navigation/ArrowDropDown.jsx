import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ArrowDropDown extends SvgIcon {

	static get is() {
		return 'material.navigation.ArrowDropDown';
	}

	renderSVG() {
		return (<g><path d="M7 10l5 5 5-5z"/></g>);
	}

}