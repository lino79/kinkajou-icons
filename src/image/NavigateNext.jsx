import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class NavigateNext extends SvgIcon {

	static get is() {
		return 'material.image.NavigateNext';
	}

	renderSVG() {
		return (<g><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></g>);
	}

}