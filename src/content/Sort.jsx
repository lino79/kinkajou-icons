import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Sort extends SvgIcon {

	static get is() {
		return 'material.content.Sort';
	}

	renderSVG() {
		return (<g><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></g>);
	}

}