import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class PowerInput extends SvgIcon {

	static get is() {
		return 'material.hardware.PowerInput';
	}

	renderSVG() {
		return (<g><path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/></g>);
	}

}