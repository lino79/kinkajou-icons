import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class TrendingUp extends SvgIcon {

	static get is() {
		return 'material.action.TrendingUp';
	}

	renderSVG() {
		return (<g><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></g>);
	}

}