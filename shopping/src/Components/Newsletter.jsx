import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { toast } from 'react-toastify'
import { userRequest } from "../../src/requestMethods";

const Container = styled.div`
  height: 60vh;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await userRequest.post("/newsletters", {
        email,
      });

      res.data && toast('Votre message a été envoyé :)', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.setTimeout(function () {
        window.location.replace("");
      }, 1000);
      //  window.location.replace("");
      // window.confirm('Confirmez votre commande');


    } catch (err) {
      console.log(err);
      toast.error("Email deja existe", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
    return (
        <Container>
            <Title>Newsletter</Title>
        <Desc>Recevez des mises à jour en temps opportun de vos produits préférés.</Desc>
            <InputContainer>
          <Input placeholder="votre e-mail" onChange={(e) => setEmail(e.target.value)} />
          <Button onClick={handleSubmit}> 
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;