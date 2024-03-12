async function authenticateAndGetToken() {
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "username": "admin",
      "password": "esq6l27gcv5p0",
      "rememberMe": true
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch("https://catalog-api.travelx.ai/api/authenticate", requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const idToken = data.id_token; 
      return idToken;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  authenticateAndGetToken().then(idToken => {
    console.log(idToken); 
    pm.request.headers.upsert({
        key: 'Authorization',
        value: 'Bearer ' + idToken
    });
  }).catch(error => {
    console.error('Error handling the id_token:', error);
  });
  