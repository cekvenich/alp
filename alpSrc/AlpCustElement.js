// should use composition instead of inheritance
export class AlpCustElement extends HTMLElement {
    setup(template) {
        const cTemp = document.createElement('template');
        cTemp.innerHTML = template;
        this.sr = this.attachShadow({ mode: 'closed' });
        this.sr.appendChild(cTemp.content.cloneNode(true));
    } //cons
} //custel
