import { createProduct } from "../templates/product.js";

let position = {};

export function loadProducts(elements) {
    const file = document;

    let products = file.getElementsByClassName("products");
    for (let i = 0; i < products.length; i++) {
        products[i].style.setProperty("--maxElements", `${elements}`);
        // products[i].style.gridTemplateColumns = `repeat(${elements}, var(--wArticle))`;
        for (let x = 0; x < elements; x++) {
            products[i].appendChild(createProduct(`120.0${i}`, `Esta es la descripcion del articulo ${x} en la fila ${i}` ,`${i}.${x}`));   
        }
    }
}


export function viewNext(element = document, c = "", i=0, clientWidth = NaN) {
    next(element, document.getElementsByClassName(c)[i]);
}

function next(parent, object) {

    // Attributes
    let widthParent = parent.clientWidth;
    let widthObject = object.scrollWidth;
    let childObject = object.childElementCount;
    let viewObject = object.firstElementChild.clientWidth;
    let restParent = (viewObject * childObject) % widthParent;
    let positionX = object.style.left == '' ? 0 : parseFloat(object.style.left);
    
    if (restParent == 0) {
        if ( !((positionX - widthParent) < ( (widthObject - widthParent) * -1)) )
            object.style.left = `${positionX - widthParent}px`;
        else object.style.left = `0px`;
    }
    else {
        let viewArticles = parseFloat(getComputedStyle(object).getPropertyValue("--articles"));
        let gap = (widthParent - (viewObject * viewArticles) ) / viewArticles;
        let restSpace = positionX - (-widthObject + positionX + widthParent) - gap;

        if (-(positionX - widthParent) < widthObject - widthParent ) {
            object.style.left = `${positionX - widthParent }px`;
        }
        else if (-(positionX - widthParent) != widthObject) {
            object.style.left = `${ positionX - (widthObject - (-positionX + widthParent)) }px`;
            console.log(positionX  - (widthObject - (-positionX + widthParent)));
        }
        else {
            object.style.left = '0px';
        }
        
            
        
    }

}