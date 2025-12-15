console.log("COOKPAGE.JS IS RUNNING");

async function loadOrders() {
    console.log("Loading orders...");

    const response = await fetch('https://tostibackend6.studiomaid.nl/orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        }
    });

    const data = await response.json();
    console.log("FULL RESPONSE:", data);
    const orders = data.orders;

    if (!Array.isArray(orders)) {
        console.error("ERROR: data.orders is not an array:", orders);
        return;
    }

    console.log("ORDERS ARRAY:", orders);

    const orderGrid = document.getElementById("orderGrid");

    orderGrid.innerHTML = "";

    orders.forEach(order => {
        if (order.ready === false) {
            const card = document.createElement("div");
            card.className = "order-card";

            card.innerHTML = `
                <h3>${order.customer}</h3>
                <p>${order.tosti}</p>
                <button class="done-btn">DONE</button>
            `;

            card.querySelector(".done-btn").addEventListener("click", () => {
                finishOrder(order.id);
            });

            orderGrid.appendChild(card);

        }
    });
}

async function finishOrder(id) {
    console.log("Finishing order", id);

    await fetch(`https://tostibackend6.studiomaid.nl/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        },


        body: JSON.stringify({ ready: true }) // set ready = true
    });
    loadOrders();
}

setInterval(loadOrders, 3000);