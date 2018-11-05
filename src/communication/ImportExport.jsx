import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ImportExport extends SvgIcon {

	static get is() {
		return 'material.communication.ImportExport';
	}

	renderSVG() {
		return (<g><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/></g>);
	}

}