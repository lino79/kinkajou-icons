import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewColumn extends SvgIcon {

	static get is() {
		return 'material.action.ViewColumn';
	}

	renderSVG() {
		return (<g><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></g>);
	}

}