import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class DoNotDisturbOn extends SvgIcon {

	static get is() {
		return 'material.notification.DoNotDisturbOn';
	}

	renderSVG() {
		return (<g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/></g>);
	}

}