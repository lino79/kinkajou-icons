import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class CallToAction extends SvgIcon {

	static get is() {
		return 'material.av.CallToAction';
	}

	renderSVG() {
		return (<g><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3v-3h18v3z"/></g>);
	}

}