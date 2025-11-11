async function getOrders() {
    const response = await fetch('https://tostibackend6.studiomaid.nl/orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        }
    });
    const orders= await response.json();
    console.log(orders);
}

getOrders();

// console.log("Request sent for orders.", {
//     msg: "HELLO",
//     time: new Date().toISOString(),
//
// });


// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");
// });
