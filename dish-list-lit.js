import {html, LitElement} from 'lit-element';
import 'dish-detail-lit/dish-detail-lit';
import style from './dish-list-styles';

class DishListLit extends LitElement{
    constructor() {
        super();
        this.dishes = [];
    }

    static get properties() {
        return {
            dishes: {
                type: Array
            }
        }
    }

    static get styles() {
        return style;
    }

    render(){
        return html`
            <div class="dishes-container">
                ${this.dishes.map(dish => html`<dish-detail-lit .dish="${dish}" showbuttons></dish-detail-lit>`)}      
            </div>
        `;
    }
}

window.customElements.define('dish-list-lit', DishListLit);