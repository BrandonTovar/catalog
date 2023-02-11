export function createProduct(p = "00.00", a = "", h4 = "0", src = "../../img/desert.jpg") {
    // Create Elements for Product
    let product = document.createElement("article");
    let prodDisplay = document.createElement("div");
    let prodDescription = document.createElement("div");
    let prodOptions = document.createElement("div");
    let divPrice = document.createElement("div");
    let favorite = document.createElement("input");
    let share = document.createElement("input");
    let car = document.createElement("input");
    let description = document.createElement("a");
    let discount = document.createElement("h4");
    let price = document.createElement("p");
    let image = document.createElement("img");

    // Adding attributes to elements
    product.setAttribute("class", "product");
    prodDisplay.setAttribute("class", "prod_display");
    image.setAttribute("src", src)
    if (!parseInt(h4) <= 0) discount.innerText=`${h4}% OFF`;
    else discount.innerText="";
    
    description.innerText=a;
    price.innerText=`$${p}`
    prodDescription.setAttribute("class", "prod_description");

    prodOptions.setAttribute("class", "prod_options");
    divPrice.setAttribute("class", "price");

    favorite.setAttribute("type", "button");
    favorite.setAttribute("value", "favorite");
    favorite.setAttribute("class", "btn material-symbols-rounded");
    
    share.setAttribute("type", "button");
    share.setAttribute("class", "btn material-symbols-rounded");
    share.setAttribute("value", "share");
    
    car.setAttribute("type", "button");
    car.setAttribute("value", "add_shopping_cart");
    car.setAttribute("class", "btn material-symbols-rounded");
    

    // Creating the object
    divPrice.appendChild(discount);
    divPrice.appendChild(price);

    prodDisplay.appendChild(image);

    prodDescription.appendChild(divPrice);
    prodDescription.appendChild(description);

    prodOptions.appendChild(favorite);
    prodOptions.appendChild(share);
    prodOptions.appendChild(car);

    product.appendChild(prodDisplay);
    product.appendChild(prodDescription);
    product.appendChild(prodOptions);

    return product
}
