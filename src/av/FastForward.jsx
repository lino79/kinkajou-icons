import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FastForward extends SvgIcon {

	static get is() {
		return 'material.av.FastForward';
	}

	renderSVG() {
		return (<g><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/></g>);
	}

}