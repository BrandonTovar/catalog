import { createProduct } from "../templates/product.js";

export function loadProducts(elements) {
    const file = document;

    let products = file.getElementsByClassName("products");
    for (let i = 0; i < products.length; i++) {
        products[i].style.gridTemplateColumns = `repeat(${elements}, var(--wArticle))`;
        for (let x = 0; x < elements; x++) {
            products[i].appendChild(createProduct(`120.0${i}`, `Esta es la descripcion del articulo ${x} en la fila ${i}` ,`${i}.${x}`));   
        }
    }
}


export function viewNext(element = document, c = "", i=0, clientWidth = NaN) {
    next(element, document.getElementsByClassName(c)[0])
    // let sizes = getDimensions(element,c);
    // if (isNaN(sizes.width)) next(element, c, i, 0);
    // else next(element, c, i, sizes.width);
}
export function viewBefore(element = document, c = "", i=0, clientWidth = NaN) {
    let sizes = getDimensions(element,c);
    let e = element.getElementsByClassName(c)[i];
    let posX = parseInt(e.style.left);
    let width = clientWidth == 0 ? parseInt(e.clientWidth) : clientWidth;
    if (isNaN(sizes.width)) before(element, e, i, 0);
    else before(element, c, i, sizes.width);
}

// function next(element = document, c = "", i=0, clientWidth = NaN) {
//     let e = element.getElementsByClassName(c)[i];
//     let posX = parseInt(e.style.left);
//     let width = clientWidth == 0 ? parseInt(e.clientWidth) : clientWidth;
//     if (posX <= (-e.scrollWidth + width)) e.style.left = `0px`;
//     else e.style.left = `${(isNaN(posX)? 0 : posX) - width}px`;
//     console.log(width, e.scrollWidth)
// }
function before(element = document, c = "", i=0, clientWidth = NaN) {
    if (posX == 0 || isNaN(posX)) e.style.left = `${(-e.scrollWidth + width)}px`;
    else e.style.left = `${(isNaN(posX)? 0 : posX) + width}px`;
}

function getDimensions(e = document.body, c = "") {
    let element = e.getElementsByClassName(c)[0];
    let stylesheet = getComputedStyle(element);
    let values = {
        width: parseInt(stylesheet.getPropertyValue("--width")),
        articles: parseInt(stylesheet.getPropertyValue("--articles")),
        wArticle: parseInt(stylesheet.getPropertyValue("--wArticle"))
    };  
    let gap = (values.width - (values.articles * values.wArticle) ) / values.articles;
    let clientWidth = (values.articles * values.wArticle) + gap;
    return {"gap": gap, "width": clientWidth};
}
/*
view next { 
    Hara el control de las funciones, encapsulamiento. Solo se podra acceder a los demas metodos por medio de este
}
next { 
    Contiene el codigo necesario para avanzar una imagen en el banner o una fila en los productos, 
    este codigo debe tomar el cuenta medidas impares o con resto diferente a cero
}
getAttributes {
    Este  codigo sera unico y no puede ser modificado, existe solo como complemento y varias funciones dependen de el.
}



*/

function goNext() {
    getAttributes();
    next();
}

function next(parent, object) {
    // El tamaño del elemento que se movera no es divisible por si mismo, es decir. Dejar un resto diferente a cero.
    // Si tiene resto CERO el elemento se movera siempre en saltos iguales
    // Si el elemento resulta en resto diferente a cero, el elemento en su ultimo salto hara una multiplacacion por su 100% para obtener el movimiento faltante
    let position, width,
      childs = parent.childElementCount,
    //   rest = object.offsetWidth / (width * childs);
    rest = 0;
    if (rest != 0) {
        
    }
    else {
        if ( (object.offsetLeft - object.offsetWidth) < (object.scrollWidth * -1)) 
            object.style.left = `${object.offsetLeft - object.offsetWidth}px`;
        // else ;
        console.log( (object.offsetLeft - object.offsetWidth) < (object.scrollWidth * -1));
    }
}