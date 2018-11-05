import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Functions extends SvgIcon {

	static get is() {
		return 'material.editor.Functions';
	}

	renderSVG() {
		return (<g><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/></g>);
	}

}