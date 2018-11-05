import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FirstPage extends SvgIcon {

	static get is() {
		return 'material.navigation.FirstPage';
	}

	renderSVG() {
		return (<g><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/></g>);
	}

}