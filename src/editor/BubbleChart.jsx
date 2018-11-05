import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class BubbleChart extends SvgIcon {

	static get is() {
		return 'material.editor.BubbleChart';
	}

	renderSVG() {
		return (<g><circle cx="7.2" cy="14.4" r="3.2"/><circle cx="14.8" cy="18" r="2"/><circle cx="15.2" cy="8.8" r="4.8"/></g>);
	}

}