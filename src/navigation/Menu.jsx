import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Menu extends SvgIcon {

	static get is() {
		return 'material.navigation.Menu';
	}

	renderSVG() {
		return (<g><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></g>);
	}

}