import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewQuilt extends SvgIcon {

	static get is() {
		return 'material.action.ViewQuilt';
	}

	renderSVG() {
		return (<g><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"/></g>);
	}

}