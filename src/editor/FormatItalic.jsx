import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FormatItalic extends SvgIcon {

	static get is() {
		return 'material.editor.FormatItalic';
	}

	renderSVG() {
		return (<g><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></g>);
	}

}