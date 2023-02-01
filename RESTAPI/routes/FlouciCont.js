const axios =require("axios");

module.exports={
    Add:async (req, res)=>{
        const url = "https://developers.flouci.com/api/generate_payment"
        const payload = {
            "app_token": "68277d17-8b98-46ed-8aa9-a0dafffe9f48",
            "app_secret": process.env.FLOUCI_KEY,
            "amount": req.body.amount,
            "accept_card": "true",
            "session_timeout_secs": 1200,
            "success_link": "http://localhost:5000/success",
            "fail_link": "http://localhost:5000/fail",
            "developer_tracking_id": "7bbf20db-3cba-4643-9561-362d70404a6e"
        }
        
        await axios
        .post(url,  payload)
        .then(result => {
            res.send(result.data)
        })
        .catch(err =>console.log(err));

    }
}