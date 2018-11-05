import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FilterList extends SvgIcon {

	static get is() {
		return 'material.content.FilterList';
	}

	renderSVG() {
		return (<g><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></g>);
	}

}