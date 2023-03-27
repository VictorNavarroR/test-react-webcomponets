/* eslint-disable no-useless-constructor */
class BasicComponent extends HTMLElement {

    constructor() {
        super();    
        //this.root = this.attachShadow({mode: 'closed'})
    }

    connectedCallback() {
        this.innerHTML = `<h1>Hola ${this.name} desde un web component</h1>`;
    }

    static get observedAttributes() {
        return ['name'];
    }

    get name() {
        return this.getAttribute('name')
    }

    set name(value) {
        this.setAttribute('name', value)
    }

    //salta cuando un atributo cambia
    attributeChangedCallback(name, oldName, newName) {
        if(name.toLowerCase() === 'name') {
            console.log('ha cambiado el name')
        }
    }

}

customElements.define('basic-component', BasicComponent);