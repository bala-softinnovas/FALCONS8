import { MessageContext, publish } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import SI_LMC from '@salesforce/messageChannel/SoftInnovas__c';

export default class LmsComponentX extends LightningElement {
    selectedValue;

    @wire(MessageContext)
    context;

    get options() {
        return [
            {label: "High", value: "High"},
            {label: "Medium", value: "Medium"},
            {label: "Low", value: "Low"}
        ];
    }

    changeHandler(event) {
        this.selectedValue = event.target.value;
        //prepare message
        const message = {
            lmsdata: {
                value: this.selectedValue
            }
        };

        //publish message
        publish(this.context, SI_LMC, message);
    }
}