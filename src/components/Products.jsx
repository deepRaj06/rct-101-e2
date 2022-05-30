import React, { useEffect, useState } from "react";
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import axios from'axios';
import AddProduct from "./AddProduct";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const[prod, setProd] = useState([]);
  const[page, setPage] = useState(1);
  const[limit, setLimit] = useState(3);

  useEffect( () => {
    axios.get(`http://localhost:8000/products?_page=${Number(page)}&_limit=${Number(limit)}`)
    .then( (res) => {
      console.log(res);
      setProd(res.data);
    })
  })

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct></AddProduct>
      <Grid>
        {/* List of Products */}
        </Grid>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
