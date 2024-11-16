// Componente del botón que muestra la caja de texto
class Ivan192157Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        this.innerHTML = `<button id="showTextbox">Mostrar Caja de Texto</button>`;
        
        
        this.style.fontSize = "16px";
        this.style.padding = "10px 20px";
        this.style.cursor = "pointer";
        
        
        this.querySelector("#showTextbox").addEventListener("click", () => {

            const event = new CustomEvent('toggleTextbox', { bubbles: true, composed: true });
            this.dispatchEvent(event);  
        });
    }
}

window.customElements.define("ivan-192157-button", Ivan192157Button);

// Componente de la caja de texto
class Ivan192157Textbox extends HTMLElement {
    constructor() {
        super();
        this._hidden = true; 
    }

    connectedCallback() {
        
        this.innerHTML = `<input type="text" id="textBox" style="display:none;" placeholder="Escribe algo...">`;
        
        
        const input = this.querySelector("#textBox");
        input.style.padding = "10px";
        input.style.fontSize = "16px";
        
        
        document.addEventListener('toggleTextbox', () => {
            
            this._hidden = !this._hidden;
            input.style.display = this._hidden ? "none" : "block"; 
        });
    }
}

window.customElements.define("ivan-192157-textbox", Ivan192157Textbox);

// Componente para ocultar la caja de texto cuando se hace clic
class Ivan192157HideTextbox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
       
        this.innerHTML = `<button id="hideTextbox">Ocultar Caja de Texto</button>`;
        
        
        this.style.fontSize = "16px";
        this.style.padding = "10px 20px";
        this.style.cursor = "pointer";
        
        
        this.querySelector("#hideTextbox").addEventListener("click", () => {
            
            const event = new CustomEvent('toggleTextbox', { bubbles: true, composed: true });
            this.dispatchEvent(event);  
        });
    }
}

window.customElements.define("ivan-192157-hide-textbox", Ivan192157HideTextbox);
