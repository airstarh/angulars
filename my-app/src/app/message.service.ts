import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
	messages: any[]   = [];
	stateEmpty        = 'empty';

	add(message: any) {
		this.messages.push(message);
		this.stateEmpty = 'full';
		const _this     = this;
		//setTimeout(function () {_this.clear();}, 1000)
	}

	clear() {
		this.stateEmpty = 'empty';
		this.messages   = [];
	}
}
