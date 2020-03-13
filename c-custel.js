// get the abestract class:
import { AlpCustElement } from '/alpSrc/AlpCustElement.js';
export class Custel1 extends AlpCustElement {

template = `
<style>:host {
    all: initial;
    display: block;
    contain: content;
}</style>

<b>I'm a Cust. El</b>
<slot></slot>
`;

constructor() {
    super();
        console.log('Comp1');
        this.setup(this.template); // just a helper function 
    } //cons

} //custel

customElements.define('c-custel', Custel1);
console.log('loaded');
