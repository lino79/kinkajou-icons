import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class CompareArrows extends SvgIcon {

	static get is() {
		return 'material.action.CompareArrows';
	}

	renderSVG() {
		return (<g><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/></g>);
	}

}