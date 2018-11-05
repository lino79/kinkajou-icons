import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Title extends SvgIcon {

	static get is() {
		return 'material.editor.Title';
	}

	renderSVG() {
		return (<g><path d="M5 4v3h5.5v12h3V7H19V4z"/></g>);
	}

}