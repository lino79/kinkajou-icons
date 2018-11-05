import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class LastPage extends SvgIcon {

	static get is() {
		return 'material.navigation.LastPage';
	}

	renderSVG() {
		return (<g><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/></g>);
	}

}