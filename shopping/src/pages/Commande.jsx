import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import  {toast} from 'react-toastify';
import { userRequest } from "../requestMethods";

const Commande = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [number, setNumber] = useState('');
  const [adresse, setAdresse] = useState('');
  const [userId, setUserId] = useState('')
  const cart = useSelector((state) => state.cart);

  userRequest.post('/auth/me').then(response => {
    setUserId(response.data.id)
  }).catch(err => {
    console.log(err)
  })

  const products = cart.products 
  const amount = cart.total;

  const handleClick = (event) => {
    event.preventDefault()
    
    const data = {
      userId, nom, prenom, number, amount, products, address: adresse
    }
    
    userRequest.post('/orders', data).then(response => {
      console.log(response.data);
      toast('commande envoyé avec succès:)', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.setTimeout(function () {
        window.location.replace("/cart");
      }, 2000);
    }).catch(err => {
      toast('Quelque chose ne va pas...', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    
  }
    return (
        <Container>
            <Wrapper>
                <Title>FINALISATION DE LA COMMANDE</Title>
                <Form>
                    <Input type="text" placeholder="Prénom *" value={prenom} onChange={(value) => setPrenom(value.target.value)} />
            <Input type="text" placeholder="Nom *" value={nom} onChange={(value) => setNom(value.target.value)} />
            <Input type="number" placeholder="Numéro de téléphone mobile *" value={number} onChange={(value) => setNumber(value.target.value)} />
            <Input type="text" placeholder="Adresse *" value={adresse} onChange={(value) => setAdresse(value.target.value)} />

                    
                    <Agreement>
                        CHAMPS REQUIS *<br/>
                        Paiement CASH à la livraison<br/>
                        Livraison à domicile ou au bureau
                    </Agreement>
                    <Agreement1>
                        <Link to="/cart">RETOUR AU PANIER </Link>  
                        </Agreement1>
                    <Button onClick={(event) => handleClick(event)}>Commander</Button>
                    
                </Form>
               
            </Wrapper>
           
        </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
 background-color: #ebebe0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
   text-align: center;
   font-family: serif;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-family: cursive;
`;
const Agreement1 = styled.span`
 font-size: 12px;
  margin: 20px 0px;
  font-family: cursive;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
 width:100%;
  height:100%;
   border: 1px solid;
   font-family: cursive;
`;

export default Commande;