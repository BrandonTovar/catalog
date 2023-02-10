import { createProduct } from "../templates/product.js";

export function viewNext(element = document, clase = "advertisings", ident = 0) { 
    const object = element.getElementsByClassName(clase)[ident];
    const att = object.attributes;
    if (parseInt(att.showing.value) < (object.scrollWidth / element.offsetWidth )) att.showing.value = parseInt(att.showing.value) + 1;
    else att.showing.value =  1;
}
export function viewAfter(element = document, clase = "advertisings", ident = 0) { 
    const object = element.getElementsByClassName(clase)[ident];
    const att = object.attributes;
    if (parseInt(att.showing.value) > 1) att.showing.value = parseInt(att.showing.value) - 1;
}

export function loadProducts(elements) {
    const file = document;

    let products = file.getElementsByClassName("products");
    for (let i = 0; i < products.length; i++) {
        products[i].style.gridTemplateColumns = `repeat(${elements}, var(--wArticle))`;
        for (let x = 0; x < elements; x++) {
            products[i].appendChild(createProduct());   
        }
    }
}