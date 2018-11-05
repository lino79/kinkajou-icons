import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewArray extends SvgIcon {

	static get is() {
		return 'material.action.ViewArray';
	}

	renderSVG() {
		return (<g><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"/></g>);
	}

}