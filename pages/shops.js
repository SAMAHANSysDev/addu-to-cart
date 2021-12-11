import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

import GradientHeader from "../components/gradient-headline";
import ShopCard from "../components/shop-card";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import React from 'react';

export default function Shops({ shops }) {

  console.log(shops);
  return (
    <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
      <Box
        sx={{
          margin: "auto",
          marginTop: 2,
          width: "80%"
        }}>
          <GradientHeader variant="h2" text="SHOPS DIRECTORY" />
          <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
            { shops.map((shop) =>(
              <Grid item key={shop.id}>
                <ShopCard shop={shop}/>
              </Grid>
            )) }
          </Grid>
        </Box>
    </Box>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query Shops {
      shops {
        id
        name
        url
        logo {
          filename_disk
        }
      }
    }
    `,
  });
  return {
    props: {
      shops: data.shops
    },
  };
}