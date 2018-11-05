import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class LaptopChromebook extends SvgIcon {

	static get is() {
		return 'material.hardware.LaptopChromebook';
	}

	renderSVG() {
		return (<g><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/></g>);
	}

}