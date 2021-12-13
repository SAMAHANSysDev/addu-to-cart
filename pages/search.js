import { gql } from "@apollo/client";
import client from "../utils/apollo-client";
import { NextSeo } from 'next-seo';

import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SearchCard from '../components/search-card';

export default function Search({ search, query }){
    return(
      <>
        <NextSeo
          title={`Search results for ${query} | AdDU-To-Cart`}
          description="Discover AdDU marketplace. AdDU-To-Cart now! A Business Website Initiative for Atenean Entrepreneurs."
          canonical={`https://addutocart.addu.edu.ph/search?query=${query}`}
          openGraph={{
            type: 'website',
            url: `https://addutocart.addu.edu.ph/search?query=${query}`,
            title: `Search results for ${query} | AdDU-To-Cart`,
            description: 'Discover AdDU marketplace. AdDU-To-Cart now! A Business Website Initiative for Atenean Entrepreneurs.',
            images: [
              {
                url: 'https://addutocart.addu.edu.ph/atc-800x600.jpg',
              },
            ],
            site_name: 'AdDU To Cart',
          }}
        />
        <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5", width: "100%"}}>
          <Box
            sx={{
                margin: "auto",
                marginTop: 2,
                width: "80%"
            }}>
            <Box>
                <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                    { search.map((product) => product?.id ? (
                      <Grid key={product.id} item>
                          <SearchCard product={product} />
                      </Grid>
                    ) : null) }
                </Grid>
            </Box>
          </Box>
        </Box>
      </>
    )
}

export async function getServerSideProps({ query }) {
    const { data } = await client.query({
      query: gql`
        query Search {
          products(search: "${query.query}") {
            id
            name
            price
            price_currency
            images {
              directus_files_id {
                filename_disk
              }
            }
          }
        }
      `,
    });
    return {
      props: {
        search: data.products,
        query: query.query
      },
    };
  }