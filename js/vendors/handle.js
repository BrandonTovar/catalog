// let btn_back = document.querySelectorAll('div[index="1"]')[0].querySelectorAll('input[value="arrow_back_ios"]')[0];
// let btn_forward = document.querySelectorAll('div[index="1"]')[0].querySelectorAll('input[value="arrow_forward_ios"]')[0];

import * as method from "./methods.js";
export { loadProducts } from "./methods.js";

let banner = document.getElementsByClassName("banner")[0];

banner.getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewAfter(banner, "advertisings", 0)})
banner.getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(banner, "advertisings", 0)})

let articles = document.getElementsByClassName("articles");

articles[0].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewAfter(articles[0], "products", 0)})
articles[0].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[0], "products", 0)})

articles[1].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewAfter(articles[1], "products", 0)})
articles[1].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[1], "products", 0)})

articles[2].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewAfter(articles[2], "products", 0)})
articles[2].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[2], "products", 0)})

articles[3].getElementsByTagName("input")[0].addEventListener("mousedown", function() { method.viewAfter(articles[3], "products", 0)})
articles[3].getElementsByTagName("input")[1].addEventListener("mousedown", function() { method.viewNext(articles[3], "products", 0)})