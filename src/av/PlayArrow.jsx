import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class PlayArrow extends SvgIcon {

	static get is() {
		return 'material.av.PlayArrow';
	}

	renderSVG() {
		return (<g><path d="M8 5v14l11-7z"/></g>);
	}

}