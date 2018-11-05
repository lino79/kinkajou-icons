import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ChangeHistory extends SvgIcon {

	static get is() {
		return 'material.action.ChangeHistory';
	}

	renderSVG() {
		return (<g><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"/></g>);
	}

}