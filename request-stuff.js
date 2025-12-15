async function getOrders() {

    const response= await fetch('https://tostibackend6.studiomaid.nl/orders', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'x-api-key': ''
            }
        });
    const orders = await response.json();
    console.log(orders);
    }

    getOrders();

