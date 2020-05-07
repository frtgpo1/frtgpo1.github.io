createRequest = (url, credentials) => {
    const headers = new Headers();
    // Hier wird festgelegt, was wir vom Server als Antwort erwarten.
    headers.append('Accept', 'application/json');

    // window.btoa erstellt einen Base64 verschlüsselten String.
    // Hier werden die Credentials also verschlüsselt.
    const encodedCredentials = window.btoa(credentials);
    headers.append('Authorization', 'Basic ' + encodedCredentials);

    const request = new Request(url, {
      method: 'GET',
      headers: headers,
      // same-origin ist der default Wert:
      // Bei Anfragen von der selben Domain werden Cookies, Validation, Credentials mitgesendet.
      // Bei Anfragen von außerhalb werden sie nicht mit gesendet.

      // include kann eingestellt werden:
      // Cookies usw. werden mit der Anfrage mitgesendet, auch bei Anfragen von außerhalb.
      credentials: 'omit'
    });

    return request;
  }

  fetchJson = (request, callbackForJson) => {
    fetch(request)
    .then(response => {
      this.handleErrorCodes(response);

      return response.json()
        .then(data => data);
    })
    .then(json => {
      callbackForJson(json);
    })
    .catch(error => {
      this.logError(error);
      this.displayError(error);
    });
  }

  const request = createRequest('https://../get/dings', 'olaf:passwort');
  fetchJson(request, doSomethingWithJson());