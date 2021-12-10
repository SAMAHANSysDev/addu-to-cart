import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

import React from 'react';
import GradientHeader from '../components/gradient-headline';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SearchCard from '../components/search-card';
import { useRouter } from 'next/router';

export default function Search({ search }){
    const router = useRouter();

    const searchQuery = router.query.query

    return(
        <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5", width: "100%"}}>
            { search.map((category) => (
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
                            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ? (
                                <Grid key={product.id} item>
                                    <SearchCard product={product} />
                                </Grid>
                            ) : null
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
                price
                shop {
                    id
                    name
                    url
                    }
                images {
                  directus_files_id(limit: 1) {
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
        search: data.categories
      },
    };
  }