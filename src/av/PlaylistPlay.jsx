import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class PlaylistPlay extends SvgIcon {

	static get is() {
		return 'material.av.PlaylistPlay';
	}

	renderSVG() {
		return (<g><path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z"/></g>);
	}

}