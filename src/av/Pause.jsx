import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Pause extends SvgIcon {

	static get is() {
		return 'material.av.Pause';
	}

	renderSVG() {
		return (<g><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></g>);
	}

}