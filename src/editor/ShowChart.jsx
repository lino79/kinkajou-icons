import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ShowChart extends SvgIcon {

	static get is() {
		return 'material.editor.ShowChart';
	}

	renderSVG() {
		return (<g><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></g>);
	}

}