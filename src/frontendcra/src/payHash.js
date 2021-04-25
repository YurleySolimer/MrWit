function payumoney() {
    //Create a Data object that is to be passed to LAUNCH method of Bolt
      var pd = {
         key: 923751,
         txnid /*** Unique Transaction ID***/,
         amount /*** Amount to be paid ***/,
         firstname /*** Name of the User ***/,
         email /** Email Id of User **/,
         phone /** Mobile number of User **/,
         productinfo /* Product name */,
         surl /* Success callback URL */,
         furl /* Failure callback URL */,
         hash: ''
    }
    
    // Data to be Sent to API to generate hash.
    let data = {
        'txnid': pd.txnid,
        'email': pd.email,
        'amount': pd.amount,
        'productinfo': pd.productinfo,
        'firstname': pd.firstname
    }
    let self = this;
    // API call to get the Hash value
    fetch(base_url + 'payment/payumoney', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
    })
       .then(function (a) {
           return a.json(); 
       })
       .then(function (json) {
           pd.hash = json['hash']
           //  With the hash value in response, we are ready to launch the bolt overlay.
          //Function to launch BOLT   
          self.redirectToPayU(pd);
       });
}