import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class GetApp extends SvgIcon {

	static get is() {
		return 'material.action.GetApp';
	}

	renderSVG() {
		return (<g><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></g>);
	}

}