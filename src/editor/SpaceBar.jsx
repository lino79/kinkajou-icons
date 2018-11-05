import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class SpaceBar extends SvgIcon {

	static get is() {
		return 'material.editor.SpaceBar';
	}

	renderSVG() {
		return (<g><path d="M18 9v4H6V9H4v6h16V9z"/></g>);
	}

}