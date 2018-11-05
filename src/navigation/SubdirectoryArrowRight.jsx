import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SubdirectoryArrowRight extends SvgIcon {

	static get is() {
		return 'material.navigation.SubdirectoryArrowRight';
	}

	renderSVG() {
		return (<g><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/></g>);
	}

}