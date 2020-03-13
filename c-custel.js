// get the boilerplate:
import { AlpCustElement } from '/alpSrc/AlpCustElement.js';
export class Custel1 extends AlpCustElement {
    constructor() {
        super();
        this.template = `
    <style>:host {
       all: initial;
       display: block;
       contain: content;
    }</style>
    
    <b>I'm a Cust. El</b>
    <slot></slot>
    `;
        console.log('Comp1');
        this.setup(this.template); // just a helper funciton for boiler plate.
    } //cons
    //register properties w/ reflection to attributes, and get pg message or get attribute
    static get observedAttributes() { return ['bla', 'bla2']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    } //()
    setViewModel(vm) {
        console.log('a ViewModel can be set');
    } //()
} //custel
customElements.define('c-custel', Custel1);
console.log('loaded');
