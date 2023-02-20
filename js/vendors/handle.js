// let btn_back = document.querySelectorAll('div[index="1"]')[0].querySelectorAll('input[value="arrow_back_ios"]')[0];
// let btn_forward = document.querySelectorAll('div[index="1"]')[0].querySelectorAll('input[value="arrow_forward_ios"]')[0];

import * as method from "./methods.js";
export { loadProducts } from "./methods.js";


let banner = document.getElementsByClassName("banner")[0];

banner.getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewBefore(banner, "advertisings", 0)})
banner.getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(banner, "advertisings", 0)})

let articles = document.getElementsByClassName("articles");

articles[0].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewBefore(articles[0], "products", 0)})
articles[0].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[0], "products", 0)})

articles[1].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewBefore(articles[1], "products", 1)})
articles[1].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[1], "products", 1)})

articles[2].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewBefore(articles[2], "products", 2)})
articles[2].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[2], "products", 2)})

articles[3].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewBefore(articles[3], "products", 3)})
articles[3].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[3], "products", 3)})