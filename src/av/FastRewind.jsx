import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FastRewind extends SvgIcon {

	static get is() {
		return 'material.av.FastRewind';
	}

	renderSVG() {
		return (<g><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/></g>);
	}

}