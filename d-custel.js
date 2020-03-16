// import the abstract class, can get it from CDN also via https://...
import { AlpCustElement } from '/alpSrc/AlpCustElement.js';

export class Custel2 extends AlpCustElement {
// https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
// https://blog.sessionstack.com/how-javascript-works-the-internals-of-shadow-dom-how-to-build-self-contained-components-244331c4de6e
// https://googlechromelabs.github.io/howto-components/howto-tabs/

template = `<dialog>
    <slot></slot>
</dialog>`;

constructor() {
    super()
    console.log('Comp2')
    this.setup(this.template); // just a helper function 

    const THIZ = this
    addEventListener('ALP', function(event) {
        THIZ.show(event.detail)
    })

} //cons

show(det) {
    console.log(det)
    // this.sr is shadowroot from base class
    const dialog = this.sr.querySelector('dialog')
    dialog.show()
    
    //#closeB
    document.querySelector('#closeB').onclick = function() {
        dialog.close()
    }

    // playing
    let nodes = this.shadowRoot.querySelector('slot').assignedNodes()

    console.log(nodes[3])
}//()

} //class

customElements.define('d-custel', Custel2)
console.log('loaded')


