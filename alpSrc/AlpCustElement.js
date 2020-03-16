export class AlpCustElement extends HTMLElement {
    
    setup(template) {
        const cTemp = document.createElement('template');
        cTemp.innerHTML = template;
        this.sr = this.attachShadow({ mode: 'open' });
        this.sr.appendChild(cTemp.content.cloneNode(true));
    } //cons

    //register properties w/ reflection to attributes, and get pg attribute
    // should use composition instead of inheritance, but ...
    static get observedAttributes() { return ['x-data']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    } //()
    
} //custel
