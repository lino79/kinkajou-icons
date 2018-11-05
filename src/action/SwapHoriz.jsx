import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SwapHoriz extends SvgIcon {

	static get is() {
		return 'material.action.SwapHoriz';
	}

	renderSVG() {
		return (<g><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></g>);
	}

}