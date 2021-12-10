import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

import GradientHeader from '../components/gradient-headline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import React from 'react';

export default function Shops({ categories }) {


  return (
    <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
      { categories.map((category) => (
        <Box
          key={category.id}
          sx={{
            margin: "auto",
            marginTop: 2,
            width: "80%"
          }}>
          <Box>
              <GradientHeader variant="h2" text={category.name.toUpperCase()} />
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                { category.products.map(({ products_id: product }) => (
                  <Grid key={product.id} item>
                  </Grid>
                )) }
              </Grid>
          </Box>
        </Box>
      )) }
    </Box>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Categories {
        categories {
          id
          name
          products {
            products_id {
              id
              name
              shop {
                id
                name
                url
                logo {
                  filename_disk
                }
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      categories: data.categories
    },
  };
}