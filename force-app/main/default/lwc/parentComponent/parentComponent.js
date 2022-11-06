import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    showHandler1(event) {
        console.log("At parent component showHandler1.");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);
    }

    showHandler2(event) {
        console.log("At parent component showHandler2.");
        console.log(event.target.nodeName);
        console.log(event.currentTarget.nodeName);
    }
}