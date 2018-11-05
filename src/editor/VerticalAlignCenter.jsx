import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class VerticalAlignCenter extends SvgIcon {

	static get is() {
		return 'material.editor.VerticalAlignCenter';
	}

	renderSVG() {
		return (<g><path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/></g>);
	}

}