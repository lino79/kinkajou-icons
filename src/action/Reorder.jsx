import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Reorder extends SvgIcon {

	static get is() {
		return 'material.action.Reorder';
	}

	renderSVG() {
		return (<g><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></g>);
	}

}