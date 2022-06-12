import React from "react";
import {
  Product,
  ProductContsatiner,
  ProductName,
  ProductsContainer,
  ProductsContent,
  ProductsTitle,
} from "./Products.elements";
import { products } from "data/products";

const Products = () => {
  return (
    <>
      <ProductsContainer>
        <ProductsTitle>LA FAMILIA VITALÍNEA</ProductsTitle>
        <ProductsContent>
          {products.map((product, index) => {
            return (
              <ProductContsatiner key={index}>
                <Product src={product.img} />
                <ProductName>{product.name}</ProductName>
              </ProductContsatiner>
            );
          })}
        </ProductsContent>
      </ProductsContainer>
    </>
  );
};

export default Products;
