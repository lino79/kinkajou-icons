import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FormatAlignLeft extends SvgIcon {

	static get is() {
		return 'material.editor.FormatAlignLeft';
	}

	renderSVG() {
		return (<g><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></g>);
	}

}