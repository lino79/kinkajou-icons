import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewCompact extends SvgIcon {

	static get is() {
		return 'material.image.ViewCompact';
	}

	renderSVG() {
		return (<g><path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"/></g>);
	}

}