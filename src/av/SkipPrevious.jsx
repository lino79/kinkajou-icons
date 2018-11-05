import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SkipPrevious extends SvgIcon {

	static get is() {
		return 'material.av.SkipPrevious';
	}

	renderSVG() {
		return (<g><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></g>);
	}

}