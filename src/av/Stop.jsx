import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Stop extends SvgIcon {

	static get is() {
		return 'material.av.Stop';
	}

	renderSVG() {
		return (<g><path d="M6 6h12v12H6z"/></g>);
	}

}