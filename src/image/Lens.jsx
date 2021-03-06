import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Lens extends SvgIcon {

	static get is() {
		return 'material.image.Lens';
	}

	renderSVG() {
		return (<g><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></g>);
	}

}