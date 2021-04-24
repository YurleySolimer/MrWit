const payCtrl = {};
var jsSHA = require("jssha");


payCtrl.payUMoneyPayment = async (req, res) => {
  
    if (!req.body.txnid || !req.body.amount || !req.body.productinfo   
        || !req.body.firstname || !req.body.email) {
          res.send("Mandatory fields missing");
    } else {
          var pd = req.body;
          var hashString = '923751' // Merchant Key 
                   + '|' + pd.txnid 
                   + '|' + pd.amount + '|' + pd.productinfo + '|'          
                   + pd.firstname + '|' + pd.email + '|' 
                   + '||||||||||' 
                   + '12345678' // Your salt value
          var sha = new jsSHA('SHA-512', "TEXT");
          sha.update(hashString)
          var hash = sha.getHash("HEX");
          res.send({ 'hash': hash });
    }
}

payCtrl.payUMoneyPaymentResponse = function (req, res) {
    var pd = req.body;
    //Generate new Hash 
     var hashString = '12345678' + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + '923751'
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString)
     var hash = sha.getHash("HEX");
     // Verify the new hash with the hash value in response
     if (hash == pd.hash) {
         res.send({'status':pd.status});
     } else {
         res.send({'status':"Error occured"});
     }
  }




module.exports = payCtrl;