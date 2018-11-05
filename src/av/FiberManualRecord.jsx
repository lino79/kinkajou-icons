import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FiberManualRecord extends SvgIcon {

	static get is() {
		return 'material.av.FiberManualRecord';
	}

	renderSVG() {
		return (<g><circle fill="#010101" cx="12" cy="12" r="8"/></g>);
	}

}