import { LightningElement } from 'lwc';

export default class ModalChild extends LightningElement {
    closeHandler() {
        console.log("I am going to create a custom event and dispatch it!");
        //const closeEvent = new CustomEvent("close", {detail: "modal is closed!"});
        const con = {
            firstname: "Steve",
            lastname: "Jobs",
            company: "Apple"
        };
        const closeEvent = new CustomEvent("close", {detail: con});
        this.dispatchEvent(closeEvent);
    }
}