import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class Publish extends SvgIcon {

	static get is() {
		return 'material.editor.Publish';
	}

	renderSVG() {
		return (<g><path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"/></g>);
	}

}