import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ShortText extends SvgIcon {

	static get is() {
		return 'material.editor.ShortText';
	}

	renderSVG() {
		return (<g><path d="M4 9h16v2H4zm0 4h10v2H4z"/></g>);
	}

}