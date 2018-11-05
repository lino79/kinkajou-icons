import { Kinkajou } from '@kinkajou/kinkajou/Kinkajou';
import { SvgIcon } from '@kinkajou/svg-icon/SvgIcon';

export class ChatBubble extends SvgIcon {

	static get is() {
		return 'material.communication.ChatBubble';
	}

	renderSVG() {
		return (<g><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></g>);
	}

}