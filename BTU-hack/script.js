CK.connect({
    client_id: '487cba89a4742c4ec3955dccfb7ae125c07f02132ca4b7c66722d9a2fd5c2b43',
    redirect_uri: 'https://localhost:5500/landing.html',
    customer_token: 'YOUR_CUSTOMER_TOKEN',
    selector: '#container',
    state: {
        userId: '12345',
    }
})
    .then(function (params) {
        // your success handling code here
    })
    .catch(function (params) {
        // your error handling code here
    });

// JSON Web Token script

function salaryModalConfirm(){
    console.log('test');
    document.getElementById("salaryRow").style.backgroundColor = "#D4EDDA";
}

function salaryModalDeny(){
    console.log('test');
    document.getElementById("salaryRow").style.backgroundColor = "#F8D7DA";
}
