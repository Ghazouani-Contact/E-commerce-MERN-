import styled from "styled-components";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #F5F5F5;
   
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await publicRequest.get("/Categories");
                setCategories(res.data);
            } catch (err) { }
        };
        getCategories();
    }, []);

    return (
        <Container>
            {categories.map((item ,index) => (
                <CategoryItem item={item} key={index} />
            ))}
        </Container>
    );
};

export default Categories;