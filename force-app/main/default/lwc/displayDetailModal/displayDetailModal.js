import { api, LightningElement } from 'lwc';

export default class DisplayDetailModal extends LightningElement {
    @api recordId;
    @api objectName;

    closeHandler() {
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}