import LoadMoreButton from '../../components/load-more-button';
import GradientHeader from '../../components/gradient-headline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemCard from '../../components/item-card';
import React from 'react';

import { gql } from "@apollo/client";
import client from "../../utils/apollo-client";
import { NextSeo } from 'next-seo';

export default function Categories({ data }) {
  return (
    <>
      <NextSeo
        title={`${data?.name} | AdDU-To-Cart`}
        description="Discover AdDU marketplace. AdDU-To-Cart now! A Business Website Initiative for Atenean Entrepreneurs."
        canonical={`https://addutocart.addu.edu.ph/categories/${data?.id}`}
        openGraph={{
          type: 'website',
          url: `https://addutocart.addu.edu.ph/categories/${data?.id}`,
          title: `${data?.name} | AdDU-To-Cart`,
          description: 'Discover AdDU marketplace. AdDU-To-Cart now! A Business Website Initiative for Atenean Entrepreneurs.',
          images: [
            {
              url: 'https://addutocart.addu.edu.ph/atc-800x600.jpg',
            },
          ],
          site_name: 'AdDU To Cart',
        }}
      />
      <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
        <Box sx={{margin: "auto", marginTop: 2, width: "80%"}}>
          <Box>
              <GradientHeader variant="h2" text={data?.name.toUpperCase()}/>
              <Grid container spacing={2} sx={{margin: "auto"}} justifyContent="center">
                { data.products.map(({ products_id: product }) => (
                  <Grid key={product.id} item>
                    <ItemCard product={product} />
                  </Grid>
                )) }
              </Grid>
              { /*
              <Grid container justifyContent="center" marginY={4}>
                <LoadMoreButton/>
              </Grid>
              */ }
          </Box>
        </Box>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params

  const { data } = await client.query({
    query: gql`
      query Category {
        categories_by_id(id: ${id}) {
          id
          name
          products {
            products_id {
              id
              name
              price
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
      data: data.categories_by_id
    }, // will be passed to the page component as props
  }
}
