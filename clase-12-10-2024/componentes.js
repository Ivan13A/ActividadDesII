// Siempre hay que hacer una clase para un componente
class TittleGreenUfpso extends HTMLElement {
    constructor() {
        super();
    }

    // Se activa el uso del componente
    connectedCallback() {
        this.innerHTML = "<p>Hola mundo cruel otra vez</p>";
        this.style.color = "red";
        this.style.fontFamily = "Arial"; 
        this.style.fontSize = "40px";
        this.style.fontWeight = "bold"; 
    }
}

window.customElements.define("tittle-green-ufpso", TittleGreenUfpso);


//Boton del carrito
class ButtonCarrito extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "<button>Ir al carrito</button>";
        const button = this.querySelector("button"); 
        button.style.fontFamily = "Arial"; 
        button.style.fontSize = "20px";
        button.style.backgroundColor = "white";  
        button.style.cursor = "pointer"; 
    }
}

window.customElements.define("button-carrito", ButtonCarrito);
