import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Add extends SvgIcon {

	static get is() {
		return 'material.content.Add';
	}

	renderSVG() {
		return (<g><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></g>);
	}

}