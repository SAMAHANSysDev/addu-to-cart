import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputAdornment from "@mui/material/InputAdornment";
import Grid from '@mui/material/Grid'

import SearchIcon from "@mui/icons-material/Search";
import { Link as MUILink } from "@mui/material";

import MobileHeader from "./header-mobile";

import { useQuery, gql } from "@apollo/client";

const QUERY_CATEGORIES = gql`
  query Categories  {
    categories {
      id
      name
    }
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
    h6: {
      fontWeight: 400,
      fontSize: 18,
    },
  },
});

function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const { data, loading, error } = useQuery(QUERY_CATEGORIES);

  if (!isMobile) {
    return (
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          style={{ background: "#FFFFFF" }}
          elevation={0}
        >
          <Toolbar>
            <Link href="/" passHref>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml: 20 }}
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width="96"
                  height="124"
                  layout="intrinsic"
                />
              </IconButton>
            </Link>
            <Box sx={{ ml: 3, flexGrow: 2 }}>
              <Box sx={{ mr: 20 }}>
                <TextField
                  label="Search for products.."
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      router.push({
                        pathname: "/search",
                        query: { query: search },
                      });
                    }
                  }}
                  variant="filled"
                  InputLabelProps={{
                    style: { color: "#0078ff" },
                  }}
                  InputProps={{
                    style: { borderRadius: 20 },
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="search"
                          style={{
                            marginRight: 5,
                          }}
                          edge="end"
                          onClick={() => {
                            router.push({
                              pathname: "/search",
                              query: { query: search },
                            });
                          }}
                        >
                          <SearchIcon style={{ color: "#0078ff" }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                ></TextField>
              </Box>
              { !loading ? (
                <Grid container spacing={2} marginTop={1}>
                  { data.categories.map((category) => (
                    <Grid item key={category.id}>
                      <Typography variant="h6" component="div" color="common.black">
                        <Link href={`/categories/${category.id}`} passHref>
                          <MUILink color="inherit" underline="hover">
                            {category.name.toUpperCase()}
                          </MUILink>
                        </Link>
                      </Typography>
                    </Grid>
                  )) }
                  <Grid item>
                    <Typography variant="h6" component="div" color="common.black">
                      <Link href="/shops" passHref>
                        <MUILink color="inherit" underline="hover">
                          SHOPS DIRECTORY
                        </MUILink>
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              ) : <></> }
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  } else {
    return <MobileHeader />;
  }
}

export default Header;
