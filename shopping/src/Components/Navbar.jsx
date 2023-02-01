import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useDispatch } from "react-redux";
import { reset } from '../redux/cartRedux';
import 'react-notifications/lib/notifications.css';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

/*const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;*/

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;

  
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;

const Img = styled.img
`
  width: 100px;
  border-radius: 5px;
  padding: 4px;
   height: 30px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
float:  none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
   display: inline-block;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
    &:hover {
     color: #00FFFF	;
}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout()) 
    dispatch(reset())
    localStorage.clear()
    window.location.href = '/'
   
  
  }
  //const log ="https://firebasestorage.googleapis.com/v0/b/hygieneplus-d9a17.appspot.com/o/Hygienepic%2Favatar.jpg.png?alt=media&token=ab8c6d41-7b0c-4410-9b60-e6b4e530f883"
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
         <Link to="/">
            <Img src="https://firebasestorage.googleapis.com/v0/b/hygieneplus-d9a17.appspot.com/o/secure%2Flogo-hp.png?alt=media&token=5d6ad8d6-9311-4773-99f3-c2861a941778"alt="" />  
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Cherchez un produit" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          
          <Link to="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
            <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <div onClick={() => handleLogout()}>
            <MenuItem>LOG OUT</MenuItem>
             </div>
          <Link to="/Contact">
            <MenuItem>CONTACTEZ NOUS</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;