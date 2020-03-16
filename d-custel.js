// import the abstract class, can get it from CDN also via https://...
import { AlpCustElement } from '/alpSrc/AlpCustElement.js';

export class Custel2 extends AlpCustElement {
// https://gist.github.com/praveenpuglia/0832da687ed5a5d7a0907046c9ef1813
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
    // this.sr is shadow root from base class
    const dialog = this.sr.querySelector('dialog')
    dialog.show()
    
    const slot = this.sr.querySelector('slot').assignedNodes()
    console.log(slot)

    //this.sr.querySelector('#closeB').onclick = function() {
    //    dialog.close()
    //}

}

} //custel

customElements.define('d-custel', Custel2)
console.log('loaded')


