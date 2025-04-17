const data = {
    store: {
        apple: { price: 419, stock: 5 },
        banana: { price: 899, stock: 8 },
        pear: { price: 179, stock: 6 },
        red: { price: 1199, stock: 3 },
        blue: { price: 629, stock: 4 },
        yellow: { price: 319, stock: 7 },
        green: { price: 479, stock: 2 },
        xiaomi14: { price: 999, stock: 5 },
        oneplus12: { price: 1099, stock: 4 },
        samsungS24: { price: 1399, stock: 3 },
        googlePixel: { price: 899, stock: 5 },
    },
    cart: {
        apple: { number: 0 },
        banana: { number: 0 },
        pear: { number: 0 },
        red: { number: 0 },
        blue: { number: 0 },
        yellow: { number: 0 },
        green: { number: 0 },
        xiaomi14: { number: 0 },
        oneplus12: { number: 0 },
        samsungS24: { number: 0 },
        googlePixel: { number: 0 },
    }
};

document.addEventListener("DOMContentLoaded", () => {
    loaded();
});



function loaded() {
    console.log("Page loaded");

    const appleStockElement = document.getElementById("apple-stock");
    const applePriceElement = document.getElementById("apple-price");

    const bananaStockElement = document.getElementById("banana-stock");
    const bananaPriceElement = document.getElementById("banana-price");

    const pearStockElement = document.getElementById("pear-stock");
    const pearPriceElement = document.getElementById("pear-price");

    const redStockElement = document.getElementById("red-stock");
    const redPriceElement = document.getElementById("red-price");

    const blueStockElement = document.getElementById("blue-stock");
    const bluePriceElement = document.getElementById("blue-price");

    const yellowStockElement = document.getElementById("yellow-stock");
    const yellowPriceElement = document.getElementById("yellow-price");

    const greenStockElement = document.getElementById("green-stock");
    const greenPriceElement = document.getElementById("green-price");

    const xiaomi14StockElement = document.getElementById("xiaomi14-stock");
    const xiaomi14PriceElement = document.getElementById("xiaomi14-price");

    const oneplus12StockElement = document.getElementById("oneplus12-stock");
    const oneplus12PriceElement = document.getElementById("oneplus12-price");

    const samsungS24StockElement = document.getElementById("samsungS24-stock");
    const samsungS24PriceElement = document.getElementById("samsungS24-price");

    const googlePixelStockElement = document.getElementById("googlePixel-stock");
    const googlePixelPriceElement = document.getElementById("googlePixel-price");

    appleStockElement.innerText = `Stock: ${data.store.apple.stock}`;
    applePriceElement.innerText = `€${data.store.apple.price.toFixed(2)}`;

    bananaStockElement.innerText = `Stock: ${data.store.banana.stock}`;
    bananaPriceElement.innerText = `€${data.store.banana.price.toFixed(2)}`;

    pearStockElement.innerText = `Stock: ${data.store.pear.stock}`;
    pearPriceElement.innerText = `€${data.store.pear.price.toFixed(2)}`;

    redStockElement.innerText = `Stock: ${data.store.red.stock}`;
    redPriceElement.innerText = `€${data.store.red.price.toFixed(2)}`;

    blueStockElement.innerText = `Stock: ${data.store.blue.stock}`;
    bluePriceElement.innerText = `€${data.store.blue.price.toFixed(2)}`;

    yellowStockElement.innerText = `Stock: ${data.store.yellow.stock}`;
    yellowPriceElement.innerText = `€${data.store.yellow.price.toFixed(2)}`;

    greenStockElement.innerText = `Stock: ${data.store.green.stock}`;
    greenPriceElement.innerText = `€${data.store.green.price.toFixed(2)}`;

    xiaomi14StockElement.innerText = `Stock: ${data.store.xiaomi14.stock}`;
    xiaomi14PriceElement.innerText = `€${data.store.xiaomi14.price.toFixed(2)}`;

    oneplus12StockElement.innerText = `Stock: ${data.store.oneplus12.stock}`;
    oneplus12PriceElement.innerText = `€${data.store.oneplus12.price.toFixed(2)}`;

    samsungS24StockElement.innerText = `Stock: ${data.store.samsungS24.stock}`;
    samsungS24PriceElement.innerText = `€${data.store.samsungS24.price.toFixed(2)}`;

    googlePixelStockElement.innerText = `Stock: ${data.store.googlePixel.stock}`;
    googlePixelPriceElement.innerText = `€${data.store.googlePixel.price.toFixed(2)}`;
}



function showCheckoutButton() {
    // container where the button will be appended
    let cartTextbutton = document.getElementById("cart-text-button");
    //  makes sure the button does not repeat, if it doesnt exist then this happens, if exists, nothing happens
    let checkeoutButton = document.getElementById("checkeout-button");
    if (!checkeoutButton) {
        // Create the button
        checkeoutButton = document.createElement("button");
        checkeoutButton.id = "checkeout-button"; // Assign a unique ID
        checkeoutButton.innerText = "Remove";
        // Style
        checkeoutButton.style.padding = "10px 20px";
        checkeoutButton.style.backgroundColor = "orangered";
        checkeoutButton.style.color = "white";
        checkeoutButton.style.border = "none";
        checkeoutButton.style.cursor = "pointer";
        checkeoutButton.style.marginTop = "10px";
        // add button to the cartTextbutton container, CREATED ON HTML
        cartTextbutton.appendChild(checkeoutButton);
        //  event listener, like on click button
        // variable, action, event type
        checkeoutButton.addEventListener("click", () => {
            appleRemoveButton(); // Call appleRemoveButton
        });
    }
}

function showCheckoutButton1() {

    let cartTextbutton1 = document.getElementById("cart-text-button1");

    let checkooutButton = document.getElementById("checkeout1-button");
    if (!checkooutButton) {
        checkooutButton = document.createElement("button");
        checkooutButton.id = "checkeout1-button";
        checkooutButton.innerText = "Remove";
        // Style
        checkooutButton.style.padding = "10px 20px";
        checkooutButton.style.backgroundColor = "orangered";
        checkooutButton.style.color = "white";
        checkooutButton.style.border = "none";
        checkooutButton.style.cursor = "pointer";
        checkooutButton.style.marginTop = "10px";

        cartTextbutton1.appendChild(checkooutButton);
        checkooutButton.addEventListener("click", () => {
            bananaRemoveButton();
        });
    }
}

function showCheckoutButton2() {

    let cartTextbutton2 = document.getElementById("cart-text-button2");


    let checkuuutButton = document.getElementById("checkeout2-button");
    if (!checkuuutButton) {

        checkuuutButton = document.createElement("button");
        checkuuutButton.id = "checkeout2-button"; // Assign a unique ID
        checkuuutButton.innerText = "Remove";

        checkuuutButton.style.padding = "10px 20px";
        checkuuutButton.style.backgroundColor = "orangered";
        checkuuutButton.style.color = "white";
        checkuuutButton.style.border = "none";
        checkuuutButton.style.cursor = "pointer";
        checkuuutButton.style.marginTop = "10px";

        cartTextbutton2.appendChild(checkuuutButton);
        checkuuutButton.addEventListener("click", () => {
            pearRemoveButton();
        });
    }
}
//red
function showCheckoutButton3() {
    let cartTextbutton3 = document.getElementById("cart-text-button3");

    let checkiiitButton = document.getElementById("checkeout3-button");
    if (!checkiiitButton) {

        checkiiitButton = document.createElement("button");
        checkiiitButton.id = "checkeout3-button"; // Assign a unique ID
        checkiiitButton.innerText = "Remove";
        checkiiitButton.style.padding = "10px 20px";
        checkiiitButton.style.backgroundColor = "orangered";
        checkiiitButton.style.color = "white";
        checkiiitButton.style.border = "none";
        checkiiitButton.style.cursor = "pointer";
        checkiiitButton.style.marginTop = "10px";

        cartTextbutton3.appendChild(checkiiitButton);

        checkiiitButton.addEventListener("click", () => {
            redRemoveButton();
        });
    }
}

function showCheckoutButton4() {
    let cartTextbutton4 = document.getElementById("cart-text-button4");

    //
    let checkvvvtButton = document.getElementById("checkeout4-button");
    if (!checkvvvtButton) {

        checkvvvtButton = document.createElement("button");
        checkvvvtButton.id = "checkeout4-button"; // Assign a unique ID
        checkvvvtButton.innerText = "Remove";
        checkvvvtButton.style.padding = "10px 20px";
        checkvvvtButton.style.backgroundColor = "orangered";
        checkvvvtButton.style.color = "white";
        checkvvvtButton.style.border = "none";
        checkvvvtButton.style.cursor = "pointer";
        checkvvvtButton.style.marginTop = "10px";

        cartTextbutton4.appendChild(checkvvvtButton);

        checkvvvtButton.addEventListener("click", () => {
            blueRemoveButton();
        });
    }
}

function showCheckoutButton5() {
    let cartTextbutton5 = document.getElementById("cart-text-button5");

    //
    let checkyyytButton = document.getElementById("checkeout5-button");
    if (!checkyyytButton) {

        checkyyytButton = document.createElement("button");
        checkyyytButton.id = "checkeout5-button"; // Assign a unique ID
        checkyyytButton.innerText = "Remove";
        checkyyytButton.style.padding = "10px 20px";
        checkyyytButton.style.backgroundColor = "orangered";
        checkyyytButton.style.color = "white";
        checkyyytButton.style.border = "none";
        checkyyytButton.style.cursor = "pointer";
        checkyyytButton.style.marginTop = "10px";

        cartTextbutton5.appendChild(checkyyytButton);

        checkyyytButton.addEventListener("click", () => {
            yellowRemoveButton();
        });
    }
}


function showCheckoutButton6() {
    let cartTextbutton6 = document.getElementById("cart-text-button6");

    let checknnntButton = document.getElementById("checkeout6-button");
    if (!checknnntButton) {

        checknnntButton = document.createElement("button");
        checknnntButton.id = "checkeout6-button"; // Assign a unique ID
        checknnntButton.innerText = "Remove";
        checknnntButton.style.padding = "10px 20px";
        checknnntButton.style.backgroundColor = "orangered";
        checknnntButton.style.color = "white";
        checknnntButton.style.border = "none";
        checknnntButton.style.cursor = "pointer";
        checknnntButton.style.marginTop = "10px";

        cartTextbutton6.appendChild(checknnntButton);

        checknnntButton.addEventListener("click", () => {
            greenRemoveButton();
        });
    }
}


function showCheckoutButton7() {
    let container = document.getElementById("cart-text-button7");
    let button = document.getElementById("checkeout7-button");

    if (!button) {
        button = document.createElement("button");
        button.id = "checkeout7-button";
        button.innerText = "Remove";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "orangered";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        container.appendChild(button);
        button.addEventListener("click", () => {
            xiaomi14RemoveButton();
        });
    }
}

function showCheckoutButton8() {
    let container = document.getElementById("cart-text-button8");
    let button = document.getElementById("checkeout8-button");

    if (!button) {
        button = document.createElement("button");
        button.id = "checkeout8-button";
        button.innerText = "Remove";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "orangered";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        container.appendChild(button);
        button.addEventListener("click", () => {
            oneplus12RemoveButton();
        });
    }
}

function showCheckoutButton9() {
    let container = document.getElementById("cart-text-button9");
    let button = document.getElementById("checkeout9-button");

    if (!button) {
        button = document.createElement("button");
        button.id = "checkeout9-button";
        button.innerText = "Remove";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "orangered";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        container.appendChild(button);
        button.addEventListener("click", () => {
            samsungS24RemoveButton();
        });
    }
}




//kk

function boughtProductApple() {
    const appleStockElement = document.getElementById("apple-stock");
    const cartTextElement = document.getElementById("cart-text");

    // Check if apple is in stock
    if (data.store.apple.stock > 0) {
        data.store.apple.stock -= 1;
        data.cart.apple.number += 1;
        appleStockElement.innerText = `Stock: ${data.store.apple.stock}`;
        cartTextElement.innerText = `Xiaomi Poco F5 Pro: ${data.cart.apple.number} pcs x €419`  ;

        showCheckoutButton();
    } else {
        alert("Xiaomi Poco F5 is out of stock!");
    }
    cart(); //called at the end
}


function boughtProductBanana() {
    const BananaStockElement = document.getElementById("banana-stock");
    const cartTextElement = document.getElementById("cart-text2");
    // Check if banana is in stock
    if (data.store.banana.stock > 0) {
        data.store.banana.stock -= 1;
        data.cart.banana.number += 1;
        BananaStockElement.innerText = `Stock: ${data.store.banana.stock}`;
        cartTextElement.innerText = `Oppo Find x8 pro: ${data.cart.banana.number} pcs x €899`;

        showCheckoutButton1();
    } else {
        alert("Oppo Find x8 is out of stock!");
    }
    cart();
}


function boughtProductPear() {
    const pearStockElement = document.getElementById("pear-stock");
    const cartTextElement = document.getElementById("cart-text3");
    // Check if pear is in stock
    if (data.store.pear.stock > 0) {
        data.store.pear.stock -= 1;
        data.cart.pear.number += 1;
        pearStockElement.innerText = `Stock: ${data.store.pear.stock}`;
        cartTextElement.innerText = `Xiaomi Poco M6 Pro: ${data.cart.pear.number} pcs x €179`;
        showCheckoutButton2();
    } else {
        alert("Xiaomi Poco M6 is out of stock!");
    }
    cart();
}

function boughtProductRed() {
    const redStockElement = document.getElementById("red-stock");
    const redTextElement = document.getElementById("cart-text4");
    // Check if pear is in stock
    if (data.store.red.stock > 0) {
        data.store.red.stock -= 1;
        data.cart.red.number += 1;
        redStockElement.innerText = `Stock: ${data.store.red.stock}`;
        redTextElement.innerText = `X ASUS Rog Phone 8: ${data.cart.red.number} pcs x €1199`;
        showCheckoutButton3();
    } else {
        alert("X ASUS ROG PHONE is out of stock!");
    }
    cart();
}

function boughtProductBlue() {
    const blueStockElement = document.getElementById("blue-stock");
    const blueTextElement = document.getElementById("cart-text5");
    // Check if pear is in stock
    if (data.store.blue.stock > 0) {
        data.store.blue.stock -= 1;
        data.cart.blue.number += 1;
        blueStockElement.innerText = `Stock: ${data.store.blue.stock}`;
        blueTextElement.innerText = `Realme GT 7 Pro: ${data.cart.blue.number} pcs x €569`;
        showCheckoutButton4();
    } else {
        alert("Realme GT 7 Pro is out of stock!");
    }
    cart();
}

function boughtProductYellow() {
    const yellowStockElement = document.getElementById("yellow-stock");
    const yellowTextElement = document.getElementById("cart-text6");
    // Check if pear is in stock
    if (data.store.yellow.stock > 0) {
        data.store.yellow.stock -= 1;
        data.cart.yellow.number += 1;
        yellowStockElement.innerText = `Stock: ${data.store.yellow.stock}`;
        yellowTextElement.innerText = `Oppo a79: ${data.cart.yellow.number} pcs x €297`;
        showCheckoutButton5();
    } else {
        alert("Oppo a79 is out of stock!");
    }
    cart();
}

function boughtProductGreen() {
    const greenStockElement = document.getElementById("red-stock");
    const greenTextElement = document.getElementById("cart-text7");
    // Check if pear is in stock
    if (data.store.green.stock > 0) {
        data.store.green.stock -= 1;
        data.cart.green.number += 1;
        greenStockElement.innerText = `Stock: ${data.store.green.stock}`;
        greenTextElement.innerText = `Honor X9b: ${data.cart.green.number} pcs x €309`;
        showCheckoutButton6();
    } else {
        alert("Honor X9b is out of stock!");
    }
    cart();
}
function boughtProductXiaomi14() {
    const stockElement = document.getElementById("xiaomi14-stock");
    const cartTextElement = document.getElementById("cart-text8");

    if (data.store.xiaomi14.stock > 0) {
        data.store.xiaomi14.stock -= 1;
        data.cart.xiaomi14.number += 1;
        stockElement.innerText = `Stock: ${data.store.xiaomi14.stock}`;
        cartTextElement.innerText = `Xiaomi 14: ${data.cart.xiaomi14.number} pcs x €999`;
        showCheckoutButton7();
    } else {
        alert("Xiaomi 14 is out of stock!");
    }
    cart();
}
function boughtProductOnePlus12() {
    const stockElement = document.getElementById("oneplus12-stock");
    const cartTextElement = document.getElementById("cart-text9");

    if (data.store.oneplus12.stock > 0) {
        data.store.oneplus12.stock -= 1;
        data.cart.oneplus12.number += 1;
        stockElement.innerText = `Stock: ${data.store.oneplus12.stock}`;
        cartTextElement.innerText = `OnePlus 12: ${data.cart.oneplus12.number} pcs x €1099`;
        showCheckoutButton8();
    } else {
        alert("OnePlus 12 is out of stock!");
    }
    cart();
}

function boughtProductSamsungS24() {
    const stockElement = document.getElementById("samsungS24-stock");
    const cartTextElement = document.getElementById("cart-text10");

    if (data.store.samsungS24.stock > 0) {
        data.store.samsungS24.stock -= 1;
        data.cart.samsungS24.number += 1;
        stockElement.innerText = `Stock: ${data.store.samsungS24.stock}`;
        cartTextElement.innerText = `Samsung S24 Ultra: ${data.cart.samsungS24.number} pcs x €1399`;
        showCheckoutButton9();
    } else {
        alert("Samsung S24 Ultra is out of stock!");
    }
    cart();
}


function boughtProductIphone() {
    const stockElement = document.getElementById("iphone-stock");
    const cartTextElement = document.getElementById("cart-text-iphone");

    if (data.store.apple.stock > 0) {
        data.store.apple.stock -= 1;
        data.cart.apple.number += 1;
        stockElement.innerText = `Stock: ${data.store.apple.stock}`;
        cartTextElement.innerText = `iPhone: ${data.cart.apple.number} pcs x €${data.store.apple.price}`;
        showCheckoutButtonApple();
    } else {
        alert("iPhone is out of stock!");
    }
    cart();
}

function boughtProductGooglePixel() {
    const stockElement = document.getElementById("googlepixel-stock");
    const cartTextElement = document.getElementById("cart-text-googlepixel");

    if (data.store.googlePixel.stock > 0) {
        data.store.googlePixel.stock -= 1;
        data.cart.googlePixel.number += 1;
        stockElement.innerText = `Stock: ${data.store.googlePixel.stock}`;
        cartTextElement.innerText = `Google Pixel: ${data.cart.googlePixel.number} pcs x €${data.store.googlePixel.price}`;
        showCheckoutButtonGooglePixel();
    } else {
        alert("Google Pixel is out of stock!");
    }
    cart();
}



function cart(){
    const totalPriceElement = document.getElementById("total-price");
    const totalPrice =
        data.cart.apple.number * data.store.apple.price +
        data.cart.banana.number * data.store.banana.price +
        data.cart.pear.number * data.store.pear.price +
        data.cart.red.number * data.store.red.price +
        data.cart.blue.number * data.store.blue.price +
        data.cart.yellow.number * data.store.yellow.price +
        data.cart.green.number * data.store.green.price +
        data.cart.xiaomi14.number * data.store.xiaomi14.price +
        data.cart.oneplus12.number * data.store.oneplus12.price +
        data.cart.samsungS24.number * data.store.samsungS24.price;    totalPriceElement.innerText = `€${totalPrice.toFixed(2)}`;
}
function appleRemoveButton() {
    const appleStockElement = document.getElementById("apple-stock");
    const cartTextElement = document.getElementById("cart-text");

    if (data.cart.apple.number > 0) {
        data.store.apple.stock += 1; //increase and
        data.cart.apple.number -= 1; //decrease
        // UI
        appleStockElement.innerText = `Stock: ${data.store.apple.stock}`;
        cartTextElement.innerText = `Xiaomi Poco F5 Pro: ${data.cart.apple.number} pcs x €419`;

    } else {
        alert("No Poco F5 PRO in the cart to remove!");
    }
    cart();
}

function bananaRemoveButton() {
    const bananaStockElement = document.getElementById("banana-stock");
    const cartTextElement = document.getElementById("cart-text2");

    if (data.cart.banana.number > 0) {
        // reduce
        data.store.banana.stock += 1;
        data.cart.banana.number -= 1;
        bananaStockElement.innerText = `Stock: ${data.store.banana.stock}`;
        cartTextElement.innerText = `Oppo Find x8 pro: ${data.cart.banana.number} pcs x €899`;

    } else {
        alert("No Oppo Find x8 in the cart to remove!");
    }
    cart();
}

function pearRemoveButton() {
    const pearStockElement = document.getElementById("pear-stock");
    const cartTextElement = document.getElementById("cart-text3");

    if (data.cart.pear.number > 0) {
        // Reduce stock and quantity
        data.store.pear.stock += 1;
        data.cart.pear.number -= 1;
        pearStockElement.innerText = `Stock: ${data.store.pear.stock}`;
        cartTextElement.innerText = `Xiaomi Poco M6 Pro: ${data.cart.pear.number} x €179` ;
    } else {
        alert("No Xiaomi Poco M6 in the cart to remove!");
    }
    cart();
}



function xiaomi14RemoveButton() {
    const stockElement = document.getElementById("xiaomi14-stock");
    const cartTextElement = document.getElementById("cart-text8");

    if (data.cart.xiaomi14.number > 0) {
        data.store.xiaomi14.stock += 1;
        data.cart.xiaomi14.number -= 1;
        stockElement.innerText = `Stock: ${data.store.xiaomi14.stock}`;
        cartTextElement.innerText = `Xiaomi 14: ${data.cart.xiaomi14.number} pcs x €999`;
    } else {
        alert("No Xiaomi 14 in the cart to remove!");
    }
    cart();
}

function oneplus12RemoveButton() {
    const stockElement = document.getElementById("oneplus12-stock");
    const cartTextElement = document.getElementById("cart-text9");

    if (data.cart.oneplus12.number > 0) {
        data.store.oneplus12.stock += 1;
        data.cart.oneplus12.number -= 1;
        stockElement.innerText = `Stock: ${data.store.oneplus12.stock}`;
        cartTextElement.innerText = `OnePlus 12: ${data.cart.oneplus12.number} pcs x €1099`;
    } else {
        alert("No OnePlus 12 in the cart to remove!");
    }
    cart();
}


function samsungS24RemoveButton() {
    const stockElement = document.getElementById("samsungS24-stock");
    const cartTextElement = document.getElementById("cart-text10");

    if (data.cart.samsungS24.number > 0) {
        data.store.samsungS24.stock += 1;
        data.cart.samsungS24.number -= 1;
        stockElement.innerText = `Stock: ${data.store.samsungS24.stock}`;
        cartTextElement.innerText = `Samsung S24 Ultra: ${data.cart.samsungS24.number} pcs x €1399`;
    } else {
        alert("No Samsung S24 Ultra in the cart to remove!");
    }
    cart();
}
function showCheckoutButton7() {
    let container = document.getElementById("cart-text-button7");
    let button = document.getElementById("checkeout7-button");

    if (!button) {
        button = document.createElement("button");
        button.id = "checkeout7-button";
        button.innerText = "Remove";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "orangered";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        container.appendChild(button);
        button.addEventListener("click", () => {
            xiaomi14RemoveButton();
        });
    }
}

function showCheckoutButton8() {
    let container = document.getElementById("cart-text-button8");
    let button = document.getElementById("checkeout8-button");

    if (!button) {
        button = document.createElement("button");
        button.id = "checkeout8-button";
        button.innerText = "Remove";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "orangered";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        container.appendChild(button);
        button.addEventListener("click", () => {
            oneplus12RemoveButton();
        });
    }
}

function showCheckoutButton9() {
    let container = document.getElementById("cart-text-button9");
    let button = document.getElementById("checkeout9-button");

    if (!button) {
        button = document.createElement("button");
        button.id = "checkeout9-button";
        button.innerText = "Remove";
        button.style.padding = "10px 20px";
        button.style.backgroundColor = "orangered";
        button.style.color = "white";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.marginTop = "10px";
        container.appendChild(button);
        button.addEventListener("click", () => {
            samsungS24RemoveButton();
        });
    }
}

function redRemoveButton() {
    const redStockElement = document.getElementById("red-stock");
    const redTextElement = document.getElementById("cart-text4");

    if (data.cart.red.number > 0) {

        data.store.red.stock += 1;
        data.cart.red.number -= 1;
        redStockElement.innerText = `Stock: ${data.store.red.stock}`;
        redTextElement.innerText = `X ASUS Rog Phone 8: ${data.cart.red.number} x €1119` ;
    } else {
        alert("No X ASUS ROG in the cart to remove!");
    }
    cart();
}

function blueRemoveButton() {
    const blueStockElement = document.getElementById("blue-stock");
    const blueTextElement = document.getElementById("cart-text5");

    if (data.cart.blue.number > 0) {
        data.store.blue.stock += 1;
        data.cart.blue.number -= 1;
        blueStockElement.innerText = `Stock: ${data.store.blue.stock}`;
        blueTextElement.innerText = `Realme gt 7 pro: ${data.cart.blue.number} x €569` ;
    } else {
        alert("No Realme gt 7 pro in the cart to remove!");
    }
    cart();
}

function yellowRemoveButton() {
    const yellowStockElement = document.getElementById("yellow-stock");
    const yellowTextElement = document.getElementById("cart-text6");

    if (data.cart.yellow.number > 0) {
        data.store.yellow.stock += 1;
        data.cart.yellow.number -= 1;
        yellowStockElement.innerText = `Stock: ${data.store.yellow.stock}`;
        yellowTextElement.innerText = `Oppo a79: ${data.cart.yellow.number} x €297` ;
    } else {
        alert("No Oppo a79 in the cart to remove!");
    }
    cart();
}
function greenRemoveButton() {
    const greenStockElement = document.getElementById("green-stock");
    const greenTextElement = document.getElementById("cart-text7");

    if (data.cart.green.number > 0) {
        data.store.green.stock += 1;
        data.cart.green.number -= 1;
        greenStockElement.innerText = `Stock: ${data.store.green.stock}`;
        greenTextElement.innerText = `Honor x9b: ${data.cart.green.number} x €309` ;
    } else {
        alert("No Honor x9b in the cart to remove!");
    }
    cart();
}







function cartDiv() {
    const cartContainer = document.getElementById("cart-container");
    if (cartContainer.style.display === "none")
    {
        cartContainer.style.display = "block"; //block = visible
    }
    else {
        cartContainer.style.display = "none"; // it was block then so it will convert it to none
    }
}