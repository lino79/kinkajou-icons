import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Equalizer extends SvgIcon {

	static get is() {
		return 'material.av.Equalizer';
	}

	renderSVG() {
		return (<g><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></g>);
	}

}