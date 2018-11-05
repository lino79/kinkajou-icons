import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FormatQuote extends SvgIcon {

	static get is() {
		return 'material.editor.FormatQuote';
	}

	renderSVG() {
		return (<g><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></g>);
	}

}