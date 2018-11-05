import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class NavigateBefore extends SvgIcon {

	static get is() {
		return 'material.image.NavigateBefore';
	}

	renderSVG() {
		return (<g><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></g>);
	}

}