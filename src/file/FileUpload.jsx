import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class FileUpload extends SvgIcon {

	static get is() {
		return 'material.file.FileUpload';
	}

	renderSVG() {
		return (<g><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/></g>);
	}

}