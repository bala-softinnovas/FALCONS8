import { LightningElement, wire } from 'lwc';
import SI_LMC from '@salesforce/messageChannel/SoftInnovas__c';
import { APPLICATION_SCOPE, MessageContext, subscribe } from 'lightning/messageService';

export default class LmsComponentB extends LightningElement {
    receivedMessage;

    @wire(MessageContext)
    context;

    connectedCallback() {
        this.subscribeHandler();
    }

    subscribeHandler() {
        subscribe(
            this.context, 
            SI_LMC,
            (message) => {this.handleMessage(message)},
            {scope: APPLICATION_SCOPE}
        );
    }

    handleMessage(message) {
        /*
        if(message.lmsdata.value) {
            this.receivedMessage = message.lmsdata.value;
        } else {
            this.receivedMessage = "Didnt get any message published yet!";
        }*/
        this.receivedMessage = message.lmsdata.value ? message.lmsdata.value : "Didnt get any message published yet!";
    }
}