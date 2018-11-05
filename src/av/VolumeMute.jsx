import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class VolumeMute extends SvgIcon {

	static get is() {
		return 'material.av.VolumeMute';
	}

	renderSVG() {
		return (<g><path d="M7 9v6h4l5 5V4l-5 5H7z"/></g>);
	}

}