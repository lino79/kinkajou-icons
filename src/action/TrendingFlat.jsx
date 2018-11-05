import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class TrendingFlat extends SvgIcon {

	static get is() {
		return 'material.action.TrendingFlat';
	}

	renderSVG() {
		return (<g><path d="M22 12l-4-4v3H3v2h15v3z"/></g>);
	}

}