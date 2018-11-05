import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ViewCarousel extends SvgIcon {

	static get is() {
		return 'material.action.ViewCarousel';
	}

	renderSVG() {
		return (<g><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></g>);
	}

}