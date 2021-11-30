import React from 'react'
import '../styles/globals.css'
import Header from '../components/header.js'
import Footer from '../components/footer.js'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header/>
      <main><Component {...pageProps} /></main>
      <Footer/>
    </React.Fragment>
  )
}

export default MyApp
