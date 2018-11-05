import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SwapVert extends SvgIcon {

	static get is() {
		return 'material.action.SwapVert';
	}

	renderSVG() {
		return (<g><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></g>);
	}

}