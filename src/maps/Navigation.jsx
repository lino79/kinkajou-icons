import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Navigation extends SvgIcon {

	static get is() {
		return 'material.maps.Navigation';
	}

	renderSVG() {
		return (<g><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></g>);
	}

}