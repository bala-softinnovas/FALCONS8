import { LightningElement, wire } from 'lwc';
import SI_LMC from '@salesforce/messageChannel/SoftInnovas__c';
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    input;

    @wire(MessageContext)
    context;

    changeHandler(event) {
        this.input = event.target.value;
    }

    publishHandler() {
        //prepare message
        const message = {
            lmsdata: {
                value: this.input
            }
        };

        //publish the message
        publish(this.context, SI_LMC, message);
    }
}