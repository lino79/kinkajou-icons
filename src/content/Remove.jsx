import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Remove extends SvgIcon {

	static get is() {
		return 'material.content.Remove';
	}

	renderSVG() {
		return (<g><path d="M19 13H5v-2h14v2z"/></g>);
	}

}