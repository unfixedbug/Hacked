pm.sendRequest("https://catalog-api.travelx.ai/api/authenticate", {
    method: 'POST',
    header: {
        "accept": "*/*",
        "Content-Type": "application/json"
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            "username": "admin",
            "password": "esq6l27gcv5p0",
            "rememberMe": true
        })
    }
}, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        var jsonResponse = res.json();
        pm.environment.set("idToken", jsonResponse.id_token);
    }
});


pm.request.headers.upsert({
    key: 'Authorization',
    value: 'Bearer ' + pm.environment.get("idToken")
});



// ----------------------


pm.sendRequest("https://catalog-api.travelx.ai/api/authenticate", {
    method: 'POST',
    header: {
        "accept": "*/*",
        "Content-Type": "application/json"
    },
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            "username": "admin",
            "password": "esq6l27gcv5p0",
            "rememberMe": true
        })
    }
}, function (err, res) {
    if (err) {
        console.log(err);
    } else {
        var jsonResponse = res.json();
        pm.environment.set("idToken", jsonResponse.id_token);
        pm.request.headers.upsert({
            key: 'Authorization',
            value: 'Bearer ' + jsonResponse.id_token
        });
    }
});
