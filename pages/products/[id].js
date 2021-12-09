import React from 'react';
import Image from 'next/image'
import LoadMoreButton from '../../components/load-more-button';
import GradientHeader from '../../components/gradient-headline';
import GradButton from '../../components/gradient-button';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';

import ItemCard from '../../components/item-card';
import ImageGallery from 'react-image-gallery';

import { gql } from "@apollo/client";
import client from "../../utils/apollo-client";

export default function Products({ data }) {

  const images = data.images.map((image, i) => (
    {
      original: `https://samahan-cloud.addu.edu.ph/assets/${image.directus_files_id?.filename_disk}?width=250&height=250`,
      thumbnail: `https://samahan-cloud.addu.edu.ph/assets/${image.directus_files_id?.filename_disk}?width=50&height=50`
    }
  ));

  return (
    <Box sx={{marginTop: 2, padding: 5, backgroundColor: "#F5F5F5"}}>
      <Paper elevation={4}
        sx={{
          margin: "auto",
          position: "relative", 
          width: "80%",
          padding: 5,
          minHeight: "400px", 
          borderRadius: "30px"
          }}>
          <Grid container spacing={3} direction="row">
            <Grid item lg={4} justifyContent="center">
{/*               <Grid container item justifyContent="center">
                <Image src={`https://samahan-cloud.addu.edu.ph/assets/${data?.images[0]?.directus_files_id?.filename_disk}`} width="250px" height="250px"></Image>
              </Grid>
              <Grid container item justifyContent="center" marginTop={2} spacing={1}>
                { data.images.map((image, i) => i > 0 ? (
                  <Grid item>
                    <Image src={`https://samahan-cloud.addu.edu.ph/assets/${image.directus_files_id?.filename_disk}`} width="50px" height="50px"></Image>
                  </Grid>
                ) : null) }
              </Grid> */}
              {images ? (
                <ImageGallery items={images} showPlayButton={false} />
              ) : null
              }
            </Grid>
            <Grid item lg={8}>
              <Grid item>
                <Typography variant="h2" color="common.black">{data.name}</Typography>
              </Grid>
              <Grid container spacing={4} alignItems="center">
                <Grid item>
                  <GradientHeader variant="h2" text={`Php ${data.price}`}/>
                </Grid>
                <Grid item>
                  <CardHeader
                    avatar={
                      <Avatar>H</Avatar>
                    }
                    title={data.shop.name}
                    titleTypographyProps={{variant: "h5"}}
                  />
                </Grid>
              </Grid>
              <Grid container item paddingY={3} direction="column">
                <Typography 
                  variant="h5" 
                  sx={{wordWrap: "break-word"}} 
                  dangerouslySetInnerHTML={{__html: data.description}} 
                />
              </Grid>
              <Grid container item spacing={3} alignItems="center">
                <Grid item>
                  <GradButton onClick={() => { window.open(data.shop.url, '_blank'); }} text="ORDER/INQUIRE"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Paper>
      <Box sx={{margin: "auto", marginTop: 2, width: "80%", paddingY: 5}}>
        <Box>
            <Typography variant="h3" style={{ fontSize: 36 }} color="common.black" marginY={2}>Suggested</Typography>
            <Grid container spacing={3} sx={{margin: "auto"}} justifyContent="center">
              {/*Add map function later*/}
              { data.categories[0]
                .categories_id
                .products
                .map(({
                  products_id: related_product
                }) => related_product.id !== data.id ? (
                <Grid item key={related_product.id}> 
                  <ItemCard product={related_product} />
                </Grid>
              ) : null )}
            </Grid>
            {/*
            <Grid container justifyContent="center" marginY={4}>
              <LoadMoreButton/>
            </Grid>
            */}
        </Box>
      </Box>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params

  const { data } = await client.query({
    query: gql`
      query Product {
        products_by_id(id: ${id}) {
          id
          name
          price
          description
          shop {
            id
            name
            url
          }
          images {
            directus_files_id {
              filename_disk
            }
          }
          categories(limit: 1) {
            categories_id {
              products {
                products_id {
                  id
                  name
                  price
                  images {
                    directus_files_id {
                      filename_disk
                    }
                  }
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
      data: data.products_by_id
    }, // will be passed to the page component as props
  }
}