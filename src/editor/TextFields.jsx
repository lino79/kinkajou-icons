import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class TextFields extends SvgIcon {

	static get is() {
		return 'material.editor.TextFields';
	}

	renderSVG() {
		return (<g><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/></g>);
	}

}