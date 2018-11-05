import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Landscape extends SvgIcon {

	static get is() {
		return 'material.image.Landscape';
	}

	renderSVG() {
		return (<g><path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/></g>);
	}

}