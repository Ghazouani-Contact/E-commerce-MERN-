import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../pages/Api";

const PayButton = ({ products }) => {
const currentUser = useSelector((state) => state.user.currentUser);


    const handleCheckout = () => {
        console.log(products)
        axios
            .post(`${url}/stripe/create-checkout-session`, {
                products,
                
                userId: currentUser._id,
            })
            .then((response) => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <>
            <button onClick={() => handleCheckout()}>Check out</button>
        </>
    );
};

export default PayButton;