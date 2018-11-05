import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Eject extends SvgIcon {

	static get is() {
		return 'material.action.Eject';
	}

	renderSVG() {
		return (<g><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"/></g>);
	}

}