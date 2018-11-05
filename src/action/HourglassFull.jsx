import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class HourglassFull extends SvgIcon {

	static get is() {
		return 'material.action.HourglassFull';
	}

	renderSVG() {
		return (<g><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/></g>);
	}

}