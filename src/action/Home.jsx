import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Home extends SvgIcon {

	static get is() {
		return 'material.action.Home';
	}

	renderSVG() {
		return (<g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></g>);
	}

}