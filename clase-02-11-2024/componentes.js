// Componente tipo Span
class HelpSpan extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<span>Esta es una secciòn de ayuda</span>`;
        this.style.color = "#007bff"; 
        this.style.fontSize = "20px";
        this.style.fontWeight = "600";
        this.style.padding = "2px 5px";
        this.style.borderRadius = "4px";
        this.style.backgroundColor = ""; 
    }
}

window.customElements.define("help-span", HelpSpan);


//componente web que personalice un botón que diga Notificaciones con icono

class NotificationButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <button>
                <span style="font-size: 18px; margin-right: 5px;">🔔</span> Notificaciones
            </button>`;
        this.querySelector("button").style.cssText = `
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 4px;
            display: flex;
            align-items: center;
        `;
    }
}

window.customElements.define("notification-button", NotificationButton);

//componente web que personalice una caja de texto para claves 
class EncryptedPasswordInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <input type="password" placeholder="Ingrese su clave" id="password-field">
        `;
        const input = this.querySelector("#password-field");
        input.style.cssText = `
            padding: 10px;
            font-size: 14px;
            border-radius: 4px;
            border: 1px solid #ccc;
        `;

        input.addEventListener("change", () => {
            // Encriptación básica (puede usarse una más segura)
            const encryptedValue = btoa(input.value);
            input.value = encryptedValue;
        });
    }
}

window.customElements.define("encrypted-password-input", EncryptedPasswordInput);

//componente web que integre una caja de texto
class CouponInput extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <label for="coupon-code">Cupón de Descuento</label>
            <input type="text" id="coupon-code" placeholder="Ingrese su cupón">
        `;
        const label = this.querySelector("label");
        const input = this.querySelector("#coupon-code");

        label.style.cssText = `
            font-size: 14px;
            color: #555;
            display: block;
            margin-bottom: 5px;
        `;

        input.style.cssText = `
            padding: 8px;
            font-size: 14px;
            border-radius: 4px;
            border: 1px solid #ccc;
            width: 100%;
        `;
    }
}

window.customElements.define("coupon-input", CouponInput);
