import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Flag extends SvgIcon {

	static get is() {
		return 'material.content.Flag';
	}

	renderSVG() {
		return (<g><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></g>);
	}

}