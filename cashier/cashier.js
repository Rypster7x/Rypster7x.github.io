const sendToCook = document.getElementById('sendToCook');
sendToCook.addEventListener('click', async (e) => {
    //Code that retrieves info from the form
    const username = document.getElementById('username').value;
    const tostiType = document.getElementById('tostiType').value;
    const sauceType = document.getElementById('sauceType').value;

    const obj = { customer: username, tosti: tostiType + " " + sauceType, paid:false, ready:false }
    const response = await fetch('https://tostibackend6.studiomaid.nl/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'c5402a68a4d876b841e577848ecd120287368ca7e209ff5bfbdb1e80cdc2f4ff'
        },
        body: JSON.stringify(obj)
    });
    const json = await response.json();
    console.log(json);
})