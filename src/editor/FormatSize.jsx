import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FormatSize extends SvgIcon {

	static get is() {
		return 'material.editor.FormatSize';
	}

	renderSVG() {
		return (<g><path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z"/></g>);
	}

}