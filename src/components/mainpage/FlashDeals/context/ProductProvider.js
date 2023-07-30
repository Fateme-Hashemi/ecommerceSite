import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children, productItems }) => {
  return (
    <ProductContext.Provider value={productItems}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
