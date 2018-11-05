import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class LineWeight extends SvgIcon {

	static get is() {
		return 'material.action.LineWeight';
	}

	renderSVG() {
		return (<g><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"/></g>);
	}

}