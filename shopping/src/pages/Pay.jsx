/*import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Pay = () => {
    const [stripeToken, setstripeToken ]=useState(null)
    const history = useHistory()
    const onToken=(token)=>{
        setstripeToken(token)
    };
    useEffect(() => {
        const makeRequest = async () => {
            try {
             const res = await axios.post(
                 "http://localhost:5000/api/checkout/payment",
                 {
                     tokenId: stripeToken.id,
                     amount: 2000,
                 }
                 );
                 console.log(res.data);
                history.push("/success");
            } catch (err) {
                console.log(err);
            }
        }; 
        stripeToken && makeRequest();
    }, [stripeToken, history]);

  return (
    <div
        style={{
            height: "100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}
        >
            {stripeToken ? (<span> Processing. Please wait...</span>):(

            
    <StripeCheckout
     name="HygienShop"
    // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
     shippingAddress
     billingAddress={false}
     description="your total is 20dt"
     amount={2000}
     token={onToken}
     stripeKey="pk_test_51KpKMKKiFHcDWbgDYOofinJqZLNWB0wUkfZILpLfcCTnOYTPOWnRpE0VSKhn4PtVuN9K7i2g6DPA9vkV3GSdzMd100jIXzLYbr"
     >
    <button
    style={{
        border:"none",
        width:120,
        borderRadius:5,
        padding:"20px",
        backgroundColor:"black",
        color:"white",
        fontWeight:"600",
        cursor:"pointer",
    }}
    >
      Pay Now
     </button>
  </StripeCheckout>
          )}
    </div>
  );
};

export default Pay;
*/