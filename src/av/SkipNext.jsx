import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SkipNext extends SvgIcon {

	static get is() {
		return 'material.av.SkipNext';
	}

	renderSVG() {
		return (<g><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></g>);
	}

}