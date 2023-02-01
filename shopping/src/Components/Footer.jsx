import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HygienePlus</Logo>
        <Desc>
          La société Hygiene Plus®  sarl  connue sous l'appelation Hygiene Plus- BIOCIDE  est une entreprise industrielle d’AGROCHIMIE (API 200604), son siège social est basé à Tunis depuis Avril 2006 .

          Hygiene Plus® a pour mission la formulation  des produits de lutte anti-nuisibles (raticides,insecticides et désinfectants).

          Nos produits phares sont CracK Rodent® Plus et CracK Rodent® sont homologués à usage de l’ hygiène publique par le Ministère de la Santé

          Nos marques Déposées :  Société Hygiene Plus® , CracK® et CracK Rodent®  à l'échelle internationale.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens utiles</Title>
        <List>
          <ListItem>.......</ListItem>
          <ListItem>......</ListItem>
          <ListItem>.........</ListItem>
          <ListItem>.......</ListItem>
          <ListItem>........</ListItem>
          <ListItem>.........</ListItem>
          <ListItem>.........</ListItem>
          <ListItem>........</ListItem>
          <ListItem>.......</ListItem>
          <ListItem>.........</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> HYGIENE PLUS   s.a.r.l.
          14 bis rue Ibn Abi Rahal
          Cite Olympique 1003
          Tunis - TUNISIE
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />   tel: (+216) 71.806.367  <br />    52.806.367 <br /> fax : (+216) 71.806.410
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> hygieneplus.tunisia@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;