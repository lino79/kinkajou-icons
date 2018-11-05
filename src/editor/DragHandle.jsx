import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class DragHandle extends SvgIcon {

	static get is() {
		return 'material.editor.DragHandle';
	}

	renderSVG() {
		return (<g><path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/></g>);
	}

}