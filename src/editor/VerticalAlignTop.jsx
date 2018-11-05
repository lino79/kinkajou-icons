import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class VerticalAlignTop extends SvgIcon {

	static get is() {
		return 'material.editor.VerticalAlignTop';
	}

	renderSVG() {
		return (<g><path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/></g>);
	}

}