import * as handle  from "./vendors/handle.js";
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        handle.loadProducts(18);
    
    }
}