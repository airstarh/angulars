import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
    messages: any[] = [];

    add(message: any) {
        this.messages.push(message);

        console.log("Messages ++++++++++");
        console.log(this.messages);

        const _this = this;
        setTimeout(function() {_this.clear();}, 5000);
    }

    clear() {
        this.messages = [];
        console.log("Messages ++++++++++");
        console.log('CLEARED!!!');
        console.log(this.messages);
    }
}
