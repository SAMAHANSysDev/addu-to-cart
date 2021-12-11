import { gql } from "@apollo/client";
import client from "../utils/apollo-client";
import { NextSeo } from 'next-seo';

import Image from 'next/image'
import SeeMoreButton from '../components/see-more-button';
import GradientHeader from '../components/gradient-headline';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ItemCard from '../components/item-card';
import React from 'react';
import PosterBoy from '../public/promo-boy.png'

export default function Home({ categories }) {

  return (
    <>
      <NextSeo
        title="AdDU-To-Cart | A marketplace for Atenean Entrepreneurs."
        description="Discover AdDU marketplace. AdDU-To-Cart now! A Business Website Initiative for Atenean Entrepreneurs."
        canonical="https://addutocart.addu.edu.ph"
        openGraph={{
          url: 'https://addutocart.addu.edu.ph',
          title: 'AdDU-To-Cart | A marketplace for Atenean Entrepreneurs.',
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
            position: "relative", 
            width: "80%",
            minHeight: "400px", 
            background: "linear-gradient(to right, #FF8A25, #FF4359)",
            borderRadius: "30px"
            }}>
            <Box
              sx={{
                padding: 6,
                mx: 2,
              }}>
              <Typography variant="h1" color="common.white">11.11 SALE!</Typography>
              <Typography variant="h5" color="common.white">COMING SOON (PUBMATS HERE)</Typography>
              <div className="poster-boy">
                <Image src={PosterBoy} alt="promo-boy" layout="intrinsic"/>
              </div>
            </Box>
        </Box>
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
                      <ItemCard product={product} />
                    </Grid>
                  )) }
                </Grid>
                <Grid container justifyContent="flex-end" marginTop={3}>
                  <SeeMoreButton href={`/categories/${category.id}`}/>
                </Grid>
            </Box>
          </Box>
        )) }
      </Box>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Categories {
        categories {
          id
          name
          products(limit: 6) {
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
      categories: data.categories
    },
  };
}