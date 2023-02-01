import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Newsletter from "../Components/Newsletter";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";
import { deleteCart } from "../redux/apiCalls";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router-dom"; 
const KEY = "pk_test_51KpKMKKiFHcDWbgDYOofinJqZLNWB0wUkfZILpLfcCTnOYTPOWnRpE0VSKhn4PtVuN9K7i2g6DPA9vkV3GSdzMd100jIXzLYbr";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

/*const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;*/


const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
/*const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;*/

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

//const ProductId = styled.span``;

/*const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;*/

//const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
cursor: pointer;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 600;
`; 
const Empty =styled.div`
padding:50px;
margin-left:400px
`;
const MenuItem = styled.div`
float:  none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
   display: inline-block;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover {
     color: red	;
}
`

const Cart = () => { 
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleDelete = (produit) => {
    deleteCart(produit, dispatch);
  };
  
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  

  const onToken = (token) => {
    setStripeToken(token); 
  };

 useEffect((cart) => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch { }
    };
    stripeToken && cart.total >= 1 && makeRequest();
 }, [stripeToken, cart.total, history]);
 
  return (
    <>
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper> 
          {cart.total <= 0 ? (
            <Empty>
            
              Your cart is empty
              <Link
                className="btn btn-success mx-5 px-5 py-3"
                to="/"
                style={{
                  fontSize: "16px",
                  
                }}
              >
                SHOPPING NOW
              </Link>
            </Empty>
          ) : (
            <>
        <Title>Votre Achat</Title>
        <Top>
          {/*<TopButton>CONTINUE SHOPPING</TopButton>*/}
          <TopTexts>
          {/*  <TopText>Shopping Bag(2)</TopText>*/}
         { /*  <TopText>Your Wishlist (0)</TopText>*/}
          </TopTexts>
          
        </Top>
        <Bottom>
          <Info>
           {cart.products.map((product, index) => ( 
             <Product key={index}>
                <ProductDetail>
                  <Image src={product.img } />
                 
                
                  <Details>
                    <ProductName>
                     <b>Product: {product.title}</b>
                    </ProductName>
                  {/*  <ProductId>
                     <b>ID:{product._id}</b> 
                    </ProductId> */}
                   {/* <ProductColor />  color={product.color}*/}
                   {/* <ProductSize>
                      <b>Size:</b> product.size
                    </ProductSize>*/}
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                   
                    <ProductAmount>{product.quantity}</ProductAmount>
                   <MenuItem>
                     <DeleteOutline
                       className="productListDelete"
                       onClick={() => handleDelete(product)}
                     />
                   </MenuItem>
                  
                   
                  </ProductAmountContainer>
                  
                  <ProductPrice>
                    TND {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
             
            ))}
            <Hr />
          </Info>
          
          <Summary>
            <SummaryTitle>RÉSUMÉ DU PANIER</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sous-total</SummaryItemText>
              <SummaryItemPrice>TND {cart.total}</SummaryItemPrice>
            </SummaryItem>
            
           
            <SummaryItem type="total">
             
              <SummaryItemPrice>
                <h6>Paiement CASH à la livraison</h6>

                <Link to="/Commande">
                  <Button type="filled">Cliquez ici</Button>
                </Link>
              </SummaryItemPrice>
            </SummaryItem>
            {stripeToken ? (<span> Processing. Please wait...</span>) : (
            <StripeCheckout
              name="Hygien+"
              image=""
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
                <h4>Paiement avec Cartes bancaires</h4>
                <Button>Cliquez ici</Button>
            </StripeCheckout>
            )}
          </Summary>
        </Bottom>
            </>
          )}
      </Wrapper>
     
      <Newsletter/>
      <Footer />
    </Container>
    </>
  );
};

export default Cart;