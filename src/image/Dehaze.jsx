import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Dehaze extends SvgIcon {

	static get is() {
		return 'material.image.Dehaze';
	}

	renderSVG() {
		return (<g><path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z"/></g>);
	}

}