import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SubdirectoryArrowLeft extends SvgIcon {

	static get is() {
		return 'material.navigation.SubdirectoryArrowLeft';
	}

	renderSVG() {
		return (<g><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"/></g>);
	}

}