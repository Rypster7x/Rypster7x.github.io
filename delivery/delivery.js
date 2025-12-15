console.log("DELIVERY.JS IS RUNNING");

async function loadDeliveryOrders() {
    const response = await fetch('https://tostibackend6.studiomaid.nl/orders', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        }
    });

    const data = await response.json();
    const orders = data.orders;

    if (!Array.isArray(orders)) {
        console.error("ERROR: data.orders is not an array:", orders);
        return;
    }

    const doneContainer = document.querySelector('.section.right');
    doneContainer.innerHTML = `<h2>Done</h2>`;


    const finishedOrders = orders.filter(order => order.ready === true && order.delivered !== true);

    finishedOrders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order done';
        card.innerHTML = `
            <p><strong>Name:</strong> ${order.customer}</p>
            <p><strong>Tosti:</strong> ${order.tosti}</p>
            <p><strong>Amount: 1 (max is 1)</strong></p>
            <button class="delivered-btn">DELIVERED</button>
        `;

        card.querySelector('.delivered-btn').addEventListener('click', () => {
            markDelivered(order.id);
        });

        doneContainer.appendChild(card);
    });
}

async function markDelivered(id) {
    await fetch(`https://tostibackend6.studiomaid.nl/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        },
        body: JSON.stringify({ delivered: true })
    });

    loadDeliveryOrders();
}

loadDeliveryOrders();
setInterval(loadDeliveryOrders, 3000);