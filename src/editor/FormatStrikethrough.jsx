import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FormatStrikethrough extends SvgIcon {

	static get is() {
		return 'material.editor.FormatStrikethrough';
	}

	renderSVG() {
		return (<g><path d="M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"/></g>);
	}

}