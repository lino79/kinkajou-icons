import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class NearMe extends SvgIcon {

	static get is() {
		return 'material.maps.NearMe';
	}

	renderSVG() {
		return (<g><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></g>);
	}

}