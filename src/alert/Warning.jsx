import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Warning extends SvgIcon {

	static get is() {
		return 'material.alert.Warning';
	}

	renderSVG() {
		return (<g><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></g>);
	}

}