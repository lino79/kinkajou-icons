import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewStream extends SvgIcon {

	static get is() {
		return 'material.action.ViewStream';
	}

	renderSVG() {
		return (<g><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"/></g>);
	}

}