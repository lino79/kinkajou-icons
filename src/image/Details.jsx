import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Details extends SvgIcon {

	static get is() {
		return 'material.image.Details';
	}

	renderSVG() {
		return (<g><path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/></g>);
	}

}