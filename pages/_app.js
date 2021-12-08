import React from 'react'
import '../styles/globals.css'
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({
  showSpinner: false
})

Router.events.on("routeChangeStart", () => {NProgress.start()});

Router.events.on("routeChangeComplete", (url) => {NProgress.done()});

Router.events.on("routeChangeError", () => {NProgress.done()});


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
