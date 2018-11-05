import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ArrowBack extends SvgIcon {

	static get is() {
		return 'material.navigation.ArrowBack';
	}

	renderSVG() {
		return (<g><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></g>);
	}

}