import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewHeadline extends SvgIcon {

	static get is() {
		return 'material.action.ViewHeadline';
	}

	renderSVG() {
		return (<g><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></g>);
	}

}