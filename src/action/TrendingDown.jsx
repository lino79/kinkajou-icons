import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class TrendingDown extends SvgIcon {

	static get is() {
		return 'material.action.TrendingDown';
	}

	renderSVG() {
		return (<g><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/></g>);
	}

}