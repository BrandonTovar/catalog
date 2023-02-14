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
}
export function viewBefore(element = document, c = "", i=0, clientWidth = NaN) {
    let sizes = getDimensions(element,c);
    let e = element.getElementsByClassName(c)[i];
    let posX = parseInt(e.style.left);
    let width = clientWidth == 0 ? parseInt(e.clientWidth) : clientWidth;
    if (isNaN(sizes.width)) before(element, e, i, 0);
    else before(element, c, i, sizes.width);
}

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

function goNext() {
    getAttributes();
    next();
}

function next(parent, object) {
    let wParent = parent.clientWidth;
    let objectWidth = object.scrollWidth;
    let childs = object.childElementCount;

    let rest = ( object.firstChild.clientWidth * childs) % wParent;
    console.log(rest, object.childElementCount, object.childNode);
    let posX = object.offsetLeft;    


    // if (rest != 0) {
    //     let wArticle = object.firstChild.clientWidth;
    //     let articles = Math.trunc(wParent / wArticle);
    //     let gap = (wParent - (wArticle * articles) ) / articles;
        
    // }
    // else {
    //     if ( !((posX - wParent) < ( (objectWidth - wParent) * -1)) )
    //         object.style.left = `${posX - wParent}px`;
    // }   

}


// if ( (posX - width) + objectWidth >= wParent ) 
// object.style.left = `${posX - width}px`;
// else if ( 

// posX - width == objectWidth

// ) 

// {
// object.style.left = `${ posX - (objectWidth + (posX  - width)) - (gap / 2 )}px`; 
// console.log( posX - (objectWidth + (posX  - width))  - (gap / 2) + objectWidth , wParent );
// }
// else object.style.left = '0px';