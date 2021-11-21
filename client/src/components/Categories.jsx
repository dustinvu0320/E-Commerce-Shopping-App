import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}

`;

const Categories = () => {
  return (
    <Container>
      {/* categories from data.js */}
      {categories.map((item) => (
        // Pass item and id that includes img and title into CategoryItem
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
