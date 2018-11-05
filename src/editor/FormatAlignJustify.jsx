import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FormatAlignJustify extends SvgIcon {

	static get is() {
		return 'material.editor.FormatAlignJustify';
	}

	renderSVG() {
		return (<g><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></g>);
	}

}