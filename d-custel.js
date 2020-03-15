// get the abstract class, can get it from CDN also via https://...
import { AlpCustElement } from '/alpSrc/AlpCustElement.js';

export class Custel2 extends AlpCustElement {

template = `<dialog>
    <slot></slot>
</dialog>`;

constructor() {
    super()
        console.log('Comp2')
        this.setup(this.template); // just a helper function 

        addEventListener('ALP', function(event) {
            console.log(event.detail)
        })
    } //cons

} //custel

// 
// dialog.show()
 

 

customElements.define('d-custel', Custel2)
console.log('loaded')
